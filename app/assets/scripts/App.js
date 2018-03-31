import $ from "jquery";
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();
// Feature Items
new RevealOnScroll($(".feature-item"), "85%");

// Testimonials
new RevealOnScroll($(".testimonial"), "65%");

var stickyHeader = new StickyHeader();
