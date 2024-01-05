import Link from 'next/link';

export const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">
        			北陸炊き出しマップ
            </span>
          </div>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/Water">
            <div className="mr-5 hover:text-gray-900">
							給水
						</div>
          </Link>
          <Link href="/Supplies">
            <div className="mr-5 hover:text-gray-900">
							物資
						</div>
          </Link>
          <Link href="/Sentou">
            <div className="mr-5 hover:text-gray-900">
							銭湯
						</div>
          </Link>
          <Link href="/Hospital">
            <div className="mr-5 hover:text-gray-900">
							医療
						</div>
          </Link>
        </nav>
      </div>
    </header>
  );
};