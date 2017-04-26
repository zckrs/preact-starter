module.exports = isProd => {
	const options = {
		presets: [
			['es2015', {loose: true, modules: false}],
			'stage-2'
		],
		plugins: [
			['transform-react-jsx', {pragma: 'h'}]
		]
	};

	if (isProd) {
		options.presets.push('babili');
	}

	return options;
};
