Shortly.createLoginView = Backbone.View.extend({
  className: 'login',

  template: Templates['login'],

  events: {
    'submit': 'loginToApp'
  },

  render: function() {
    console.log(Templates);
    this.$el.html( this.template() );
    return this;
  },

  loginToApp: function(e) {
    e.preventDefault(); //????????
    var $form = this.$el.find('form .text');
    var link = new Shortly.Link({ url: $form.val() });
    link.on('request', this.startSpinner, this);
    link.on('sync', this.success, this);
    link.on('error', this.failure, this);
    link.save({});
    $form.val('');
  }//,

  // success: function(link) {
  //   this.stopSpinner();
  //   var view = new Shortly.LinkView({ model: link });
  //   this.$el.find('.message').append(view.render().$el.hide().fadeIn());
  // },

  // failure: function(model, res) {
  //   this.stopSpinner();
  //   this.$el.find('.message')
  //     .html('Please enter a valid URL')
  //     .addClass('error');
  //   return this;
  // },

  // startSpinner: function() {
  //   this.$el.find('img').show();
  //   this.$el.find('form input[type=submit]').attr('disabled', 'true');
  //   this.$el.find('.message')
  //     .html('')
  //     .removeClass('error');
  // },

  // stopSpinner: function() {
  //   this.$el.find('img').fadeOut('fast');
  //   this.$el.find('form input[type=submit]').attr('disabled', null);
  //   this.$el.find('.message')
  //     .html('')
  //     .removeClass('error');
  // }
});
