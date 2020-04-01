import React from 'react';
import commonPackageTemplate from './commonPackageTemplate.jsx';

export default require('maco').template(douban, React);

function douban(props) {
  var model = props.model;

  var link = 'https://book.douban.com/subject/' + encodeURIComponent(model.name.split('|')[0]) + '/';
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
