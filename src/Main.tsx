import React, { useRef, useState } from "react";
import {
	Card,
	Center,
	CloseButton,
	Input,
	InputLabel,
	NumberInput,
	SimpleGrid,
	Stack,
} from "@mantine/core";
import { IMaskInput } from "react-imask";
import { getSmall, strToTime } from "./func";

export const Main = () => {
	const [distance, setDistance] = useState<number>(100);
	const [data, setData] = useState<(string | undefined)[]>([]);

	return (
		<>
			<Center>
				<Stack m={16}>
					<NumberInput
						value={distance}
						onChange={(e) =>
							setDistance(typeof e === "string" ? parseInt(e) : e)
						}
						label="Streckenlänge"
					/>
					<InputLabel mb={-16}>Zeiten</InputLabel>
					<SimpleGrid cols={{ base: 1, sm: 2 }}>
						{Array(10)
							.fill(0)
							.map((_, i) => {
								const iRef = useRef<HTMLInputElement>(null);
								return (
									<Input
										inputRef={iRef}
										component={IMaskInput}
										key={i}
										label={`Zeit ${i + 1}`}
										placeholder="01:02,03"
										mask="00:00,00"
										onComplete={(e) => {
											const temp = [...data];
											temp[i] = e;
											setData(temp);
										}}
										rightSectionPointerEvents="all"
										rightSection={
											<CloseButton
												aria-label="Clear input"
												onClick={() => {
													if (iRef.current) {
														iRef.current.value = "";
													}
													const temp = [...data];
													temp[i] = undefined;
													setData(temp);
												}}
											/>
										}
									/>
								);
							})}
					</SimpleGrid>
					{data.map((e, i) => {
						if (!e) {
							return null;
						}
						const small = getSmall([...data]);
						if (!small) {
							return null;
						}
						if (e === small) {
							return null;
						}
						const sT = strToTime(small);
						const eT = strToTime(e);

						return (
							<Card key={i}>
								{(
									(distance - (distance / eT) * sT) *
									100
								).toFixed(2)}{" "}
								cm / {((eT * 100 - sT * 100) / 100).toFixed(2)}{" "}
								sek
							</Card>
						);
					})}
				</Stack>
			</Center>
		</>
	);
};
