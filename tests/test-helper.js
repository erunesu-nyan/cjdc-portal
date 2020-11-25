import Application from 'cjdc-portal/app';
import config from 'cjdc-portal/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
