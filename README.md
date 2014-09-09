# metalsmith-sections

This is a plugin for [Metalsmith](http://metalsmith.io/) that splits up your
content into sections and sub sections.

The goal is to easily loop through files in a simple file structure in an 
ordered way.

## Usage

A section corresponds to a folder and a sub section to a file in that folder.
For the sub sections to appear, they must have a `subsectionIndex` attribute 
set in the YAML front-matter. This index is also what defines the order in 
which the sub sections are sorted.

If using the CLI for Metalsmith, metalsmith-sections can be used like any other
plugin by including it in `metalsmith.json`. For example:

```json
{
  "plugins": {
    "metalsmith-sections": {
      "name": "sections"
    }
  }
}
```

For Metalscript's JavaScript API, metalsmith-sections can be used like any 
other plugin, by attaching it to the function invocation chain on the 
Metalscript object. For example:

```js
var sections = require('metalsmith-sections');
require('metalsmith')(__dirname)
  .use(sections({
    name: 'sections'
  })
  .build();
```

## Options

There is only one option, which is optional:

 - `name` defines under which attribute the section tree will be created.
   Default name is `sections`.


## License

MIT, see [LICENSE](LICENSE).