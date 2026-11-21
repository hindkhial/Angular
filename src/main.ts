import { bootstrapApplication } from '@angular/platform-browser';
import { Header } from './app/header';

bootstrapApplication(Header).catch((error: unknown) => console.error(error));
