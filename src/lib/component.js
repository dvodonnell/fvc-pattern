import Base from './base.js';

const Component = function($el, config){

    Base.apply(this, [$el]);

    this.config = config || {};

};

Component.prototype = Object.assign({}, Base.prototype);

export default Component;