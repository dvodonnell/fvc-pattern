import Base from './base.js';

const Flow = function(){

    Base.apply(this, arguments);

};

Flow.prototype = Object.assign({}, Base.prototype, {

    goToView : function(id) {

        if (this.views[id]) {

            const $container = this.$el.querySelector('section');

            if ($container) {

                //likely wouldn't want to recreate views each time
                const view = new this.views[id].inst($container);
                view.render();
                if (this.views[id].onRender) {
                    this.views[id].onRender.apply(this, [view]);
                }

            }

        }

    },

    _render : function() {

        this.$el.querySelectorAll('[navigate]').forEach(($el) => {
            $el.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToView(e.target.closest('[navigate]').getAttribute('navigate'))
            });
        });

        this.goToView(Object.keys(this.views)[0]);

    }

});

export default Flow;