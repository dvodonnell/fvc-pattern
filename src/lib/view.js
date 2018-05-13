import Base from './base.js';

const View = function(){

    Base.apply(this, arguments);

};

View.prototype = Object.assign({}, Base.prototype);

export default View;