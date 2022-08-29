import Head from 'next/head';

interface props {
	title?: string;
}

const HeadComponent = ({title}: props) => {
	return (
		<Head>
			<title>{(title ? `${title} – ` : '') + 'Achmad Ashori'}</title>
			<link rel='icon' href='/favicon.ico' />
			<link rel='canonical' href='https://anshori.io/' />
			<meta name='description' content='a Fullstack Developer.' />
			<meta property='og:url' content='https://anshori.io/' />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='Achmad Anshori' />
			<meta property='og:description' content='a Fullstack Developer.' />
			<meta
				property='og:title'
				content={`${title ? `${title} – ` : ''}Achmad Anshori`}
			/>
			<meta property='og:image' content='' />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:site' content='@20arik_' />
			<meta
				name='twitter:title'
				content={`${title ? `${title} – ` : ''}Achmad Anshori`}
			/>
			<meta name='twitter:description' content='a Fullstack Developer.' />
		</Head>
	);
};

export default HeadComponent;
