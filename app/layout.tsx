import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar'

const font = Nunito({
	subsets: ['latin'],
})

export const metadata = {
	title: 'AirBnB',
	description: 'AirBnB clone built with Next.js and Tailwind CSS',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={font.className} suppressHydrationWarning={true} >
				<Navbar />
				{children}
			</body>
		</html>
	)
}
