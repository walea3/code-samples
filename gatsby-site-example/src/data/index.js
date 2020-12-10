const guides = require('!val-loader?fn=getAllGuides!./_build');
const fullGuides = require('!val-loader?fn=getFullGuides!./_build'); // TODO optimise

export const getGuide = (slug) => fullGuides[slug];

export const getAllGuides = () => guides;
