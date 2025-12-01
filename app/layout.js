import './globals.css'
import AnnouncementBar from '../components/AnnouncementBar'

export const metadata = {
  title: 'Carakara - Plant-Powered Goodness',
  description: 'Discover our delicious and nutritious smoothies made from 100% natural ingredients',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <AnnouncementBar  />
        {children}
      </body>
    </html>
  )
}