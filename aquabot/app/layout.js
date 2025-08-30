import Authprovider from '../components/Authprovider/Authprovider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Authprovider>
          {children}
        </Authprovider>
      </body>
    </html>
  );
}
