import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl;
	const title = searchParams.get("title") ?? "Casey Dyke";
	const description =
		searchParams.get("description") ??
		"A hobbyist photographer interested in animals and wildlife.";

	const kaisei = fetch(
		new URL("../../public/fonts/kaisei.ttf", import.meta.url)
	).then((res) => res.arrayBuffer());
	const kaiseiData = await kaisei;

	const inter = fetch(
		new URL("../../public/fonts/inter.ttf", import.meta.url)
	).then((res) => res.arrayBuffer());
	const interData = await inter;

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
					backgroundImage: "url(https://caseydyke.com/og-bg.png)",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "center",
						marginLeft: 140,
						marginRight: 140,
						color: "white",
					}}
				>
					<h1
						style={{
							fontFamily: "Kaisei Tokumin",
							fontSize: "120px",
						}}
					>
						{title}
					</h1>
					<p
						style={{
							fontFamily: "Inter",
							fontSize: "60px",
						}}
					>
						{description}
					</p>
				</div>
			</div>
		),
		{
			width: 1920,
			height: 1080,
			fonts: [
				{
					name: "Kaisei Tokumin",
					data: kaiseiData,
					style: "normal",
				},
				{
					name: "Inter",
					data: interData,
					style: "normal",
				},
			],
		}
	);
}
