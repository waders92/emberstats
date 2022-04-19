import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('dashboard');
  this.route('new-round');
  this.route('rounds', function() {
    this.route('show', {path: ':id'});
    this.route('edit', {path: ':id/edit'});
    this.route('destroy', {path: ':id/destroy'});
  });
});

export default Router;
