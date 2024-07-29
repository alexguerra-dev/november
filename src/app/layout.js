import './globals.css'

export const metadata = {
    title: 'November Games',
    description: 'A game from my youth.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
