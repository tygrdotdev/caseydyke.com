export const revalidate = 300;

export default function CollectionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main className="flex flex-col items-center w-full">
                <div className="flex flex-col max-w-[1400px] w-full">
                    {children}
                </div>
            </main>
        </>
    );
}
