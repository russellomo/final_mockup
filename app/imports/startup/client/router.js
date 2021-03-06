import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/home', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/login', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});

FlowRouter.route('/view-listing', {
  name: 'View_Listing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'View_Listing_Page' });
  },
});

FlowRouter.route('/view-profile', {
  name: 'View_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'View_Profile_Page' });
  },
});

FlowRouter.route('/create-listing', {
  name: 'Create_Listing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Listing_Page' });
  },
});
FlowRouter.route('/registration', {
  name: 'Registration_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Registration_Page' });
  },
});


FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
