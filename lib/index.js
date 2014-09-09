module.exports = function(opts) {

	opts = opts || {};
	opts.name = opts.name || 'sections';

	// enrich metadata with a table [sectionName][obj:subsectionFile]
	return function(files, metalsmith, done) {
		
		var metadata = metalsmith.metadata();
		var file, section;
		var sections = {};

		for (var filepath in files) {
			if (files.hasOwnProperty(filepath)) {

				file = files[filepath];
				section = filepath.split(/\/|\\/)[0];
				file.section = section;

				// look for 'subsectionIndex' in the front matter
				if (file.subsectionIndex) {
					if (!sections[section]) {
						sections[section] = [];
					}
					sections[section].push(file);
				}
			}
		}

		// sort subsections by 'subsectionIndex'
		for (section in sections) {
			sections[section].sort(function(a, b) {
				return a.subsectionIndex - b.subsectionIndex
			});
		}

		metadata[opts.name] = sections;
		done();
	};
};
