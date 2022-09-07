const { readFileSync, writeFileSync } = require('fs');

const { parseComments } = require('../');

const testFixture = async (filename) => {
  const results = parseComments(
    readFileSync(`./test/fixtures/${filename}.js`, 'utf8')
  );

  if (process.env.UPDATE_FIXTURES) {
    writeFileSync(
      `./test/fixtures/${filename}.json`,
      // eslint-disable-next-line no-magic-numbers
      `${JSON.stringify(results, null, 2)}\n`
    );
  }

  expect(`${JSON.stringify(results, null, 2)}\n`).toEqual(
    readFileSync(`./test/fixtures/${filename}.json`, 'utf8')
  );
};

describe('custom parser', () => {
  it('a', async () => await testFixture('a'));
  it('alias', async () => await testFixture('alias'));
  it('asterik', async () => await testFixture('asterik'));
  it('b', async () => await testFixture('b'));
  it('c', async () => await testFixture('c'));
  it('classes', async () => await testFixture('classes'));
  it('d-mixed', async () => await testFixture('d-mixed'));
  it('d-spaces', async () => await testFixture('d-spaces'));
  it('d-tabs', async () => await testFixture('d-tabs'));
  it('d', async () => await testFixture('d'));
  it('enums', async () => await testFixture('enums'));
  it('event', async () => await testFixture('event'));
  it('functions', async () => await testFixture('functions'));
  it('generic', async () => await testFixture('generic'));
  it('issue169', async () => await testFixture('issue169'));
  it('jsdoc-complex-types', async () =>
    await testFixture('jsdoc-complex-types'));
  it('jshint', async () => await testFixture('jshint'));
  it('literal-inline', async () => await testFixture('literal-inline'));
  it('multilinetags', async () => await testFixture('multilinetags'));
  it('nodescription', async () => await testFixture('nodescription'));
  it('prototypes-inline', async () => await testFixture('prototypes-inline'));
  it('prototypes', async () => await testFixture('prototypes'));
  it('single-multiline', async () => await testFixture('single-multiline'));
  it('single', async () => await testFixture('single'));
  it('singleline', async () => await testFixture('singleline'));
  it('skip_prefix', async () => await testFixture('skip_prefix'));
  it('slash', async () => await testFixture('slash'));
  it('string-quotes', async () => await testFixture('string-quotes'));
  it('throws', async () => await testFixture('throws'));
  it('titles', async () => await testFixture('titles'));
  it('uncommented', async () => await testFixture('uncommented'));
});
