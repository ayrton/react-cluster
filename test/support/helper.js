import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import path from 'path';
import requirePaths from 'app-module-path';

requirePaths.addPath(
  path.join(__dirname, '..', '..', 'lib')
);

chai.use(chaiEnzyme());
