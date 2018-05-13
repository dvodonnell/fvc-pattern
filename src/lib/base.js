const Base = function($el){

    this.$el = $el;

    this.listeners = {};

};

Base.prototype = {

    addListener : function(id, cb) {

        if (!this.listeners.id) {
            this.listeners[id] = [];
        }

        this.listeners[id].push(cb);

    },

    emit : function(id) {

        if (this.listeners[id]) {
            for (let i=0; i < this.listeners[id].length; i++) {
                this.listeners[id][i](arguments);
            }
        }

    }

};

export default Base;