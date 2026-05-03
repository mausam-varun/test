"use strict";
(self["webpackChunkdivara_craft_frontend"] = self["webpackChunkdivara_craft_frontend"] || []).push([[911],{

/***/ 8520:
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-banner-management/admin-banner-management.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminBannerManagementComponent: () => (/* binding */ AdminBannerManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);








function AdminBannerManagementComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_div_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.closeAlert());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function AdminBannerManagementComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.closeAlert());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.successMessage);
  }
}
function AdminBannerManagementComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.previewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r4.form.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.selectedFile ? "New image selected" : "Current image");
  }
}
function AdminBannerManagementComponent_button_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_button_79_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminBannerManagementComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading banners...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminBannerManagementComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No banners found. Create one to get started!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminBannerManagementComponent_div_85_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 86);
  }
  if (rf & 2) {
    const banner_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", banner_r26.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", banner_r26.title);
  }
}
function AdminBannerManagementComponent_div_85_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminBannerManagementComponent_div_85_div_1_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const banner_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("ID: ", banner_r26.id, "");
  }
}
function AdminBannerManagementComponent_div_85_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminBannerManagementComponent_div_85_div_1_img_2_Template, 1, 2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminBannerManagementComponent_div_85_div_1_div_3_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 77)(5, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 80)(12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminBannerManagementComponent_div_85_div_1_small_14_Template, 2, 1, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 82)(16, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_div_85_div_1_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const banner_r26 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.toggleActive(banner_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_div_85_div_1_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const banner_r26 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.editBanner(banner_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_div_85_div_1_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const banner_r26 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.deleteBanner(banner_r26.id || 0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const banner_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", banner_r26.background_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", banner_r26.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !banner_r26.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inactive", !banner_r26.is_active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", banner_r26.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](banner_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](banner_r26.cta_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order: ", banner_r26.display_order, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", banner_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", banner_r26.is_active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", banner_r26.is_active ? "Deactivate" : "Activate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", banner_r26.is_active ? "\u2713" : "\u25CB", " ");
  }
}
function AdminBannerManagementComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminBannerManagementComponent_div_85_div_1_Template, 22, 15, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.banners)("ngForTrackBy", ctx_r8.trackByBannerId);
  }
}
function AdminBannerManagementComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_div_92_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.npBannerError = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.npBannerError);
  }
}
function AdminBannerManagementComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_div_93_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.npBannerSuccess = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.npBannerSuccess);
  }
}
function AdminBannerManagementComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current Banner Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Live on homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r11.npBannerCurrentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function AdminBannerManagementComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current Banner Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No image set \u2014 default gradient is shown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminBannerManagementComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New image preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r13.npBannerPreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function AdminBannerManagementComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_div_126_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.fdBannerError = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.fdBannerError);
  }
}
function AdminBannerManagementComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_div_127_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.fdBannerSuccess = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.fdBannerSuccess);
  }
}
function AdminBannerManagementComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 96)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current Banner Background");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Live on homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r16.fdBannerCurrentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function AdminBannerManagementComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 100)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current Banner Background");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No background image set");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminBannerManagementComponent_div_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New image preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r18.fdBannerPreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
let AdminBannerManagementComponent = /*#__PURE__*/(() => {
  class AdminBannerManagementComponent {
    constructor(http) {
      this.http = http;
      this.API_BASE = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/admin/banners`;
      this.NP_BANNER_API = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/admin/new-products-banner`;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.banners = [];
      this.editingId = null;
      this.form = {
        label: '',
        title: '',
        cta_text: 'Shop Now',
        cta_link: '#',
        background_color: 'linear-gradient(135deg, #D946EF 0%, #9333EA 100%)',
        display_order: 0,
        is_active: true
      };
      this.selectedFile = null;
      this.previewUrl = null;
      this.isLoading = false;
      this.errorMessage = '';
      this.successMessage = '';
      // Gradient color picker properties
      this.gradientStartColor = '#D946EF';
      this.gradientEndColor = '#9333EA';
      this.gradientAngle = 135;
      // New Products Banner section
      this.npBannerCurrentUrl = '';
      this.npBannerFile = null;
      this.npBannerFileName = '';
      this.npBannerPreview = '';
      this.npBannerImageUrl = '';
      this.npBannerIsSaving = false;
      this.npBannerSuccess = '';
      this.npBannerError = '';
      // Flash Deals Banner section
      this.FD_BANNER_API = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/admin/flash-deals-banner`;
      this.fdBannerTitle = '';
      this.fdBannerDescription = '';
      this.fdBannerShopLink = '/shop';
      this.fdBannerFile = null;
      this.fdBannerFileName = '';
      this.fdBannerPreview = '';
      this.fdBannerCurrentUrl = '';
      this.fdBannerIsSaving = false;
      this.fdBannerSuccess = '';
      this.fdBannerError = '';
    }
    ngOnInit() {
      this.loadBanners();
      this.loadNpBannerCurrentImage();
      this.loadFlashDealsBanner();
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    /**
     * Update background color gradient when color pickers change
     */
    onGradientColorChange() {
      this.form.background_color = `linear-gradient(${this.gradientAngle}deg, ${this.gradientStartColor} 0%, ${this.gradientEndColor} 100%)`;
    }
    /**
     * Parse gradient CSS to extract colors and angle when editing a banner
     */
    parseGradientColors(gradientCss) {
      // Match linear-gradient(angle, color1, color2)
      const gradientRegex = /linear-gradient\((\d+)deg,\s*([#\w]+)\s+\d+%,\s*([#\w]+)\s+\d+%\)/i;
      const match = gradientCss.match(gradientRegex);
      if (match) {
        this.gradientAngle = parseInt(match[1], 10);
        this.gradientStartColor = match[2];
        this.gradientEndColor = match[3];
      } else {
        // Reset to defaults if parsing fails
        this.gradientAngle = 135;
        this.gradientStartColor = '#D946EF';
        this.gradientEndColor = '#9333EA';
      }
    }
    loadBanners() {
      this.isLoading = true;
      this.errorMessage = '';
      const token = this.getAdminToken();
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
      this.http.get(this.API_BASE, {
        headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
        next: banners => {
          this.banners = banners.sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
          this.isLoading = false;
        },
        error: err => {
          this.errorMessage = 'Failed to load banners: ' + (err.error?.error || err.statusText || 'Unknown error');
          this.isLoading = false;
          console.error(err);
        }
      });
    }
    onFileSelected(event) {
      const input = event.target;
      if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
        const reader = new FileReader();
        reader.onload = e => {
          this.previewUrl = e.target?.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    }
    editBanner(banner) {
      this.editingId = banner.id || null;
      this.form = {
        ...banner
      };
      this.previewUrl = banner.image_url || null;
      this.selectedFile = null;
      // Parse gradient colors for the color pickers
      this.parseGradientColors(banner.background_color);
    }
    cancelEdit() {
      this.editingId = null;
      this.resetForm();
    }
    saveBanner() {
      if (!this.form.label || !this.form.title) {
        this.errorMessage = 'Label and title are required';
        return;
      }
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';
      const formData = new FormData();
      formData.append('label', this.form.label);
      formData.append('title', this.form.title);
      formData.append('cta_text', this.form.cta_text || 'Shop Now');
      formData.append('cta_link', this.form.cta_link || '#');
      formData.append('background_color', this.form.background_color);
      formData.append('display_order', String(this.form.display_order || 0));
      formData.append('is_active', String(this.form.is_active ? 1 : 0));
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }
      const token = this.getAdminToken();
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
      if (this.editingId) {
        // Update existing banner
        this.http.put(`${this.API_BASE}/${this.editingId}`, formData, {
          headers
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
          next: () => {
            this.successMessage = 'Banner updated successfully';
            this.isLoading = false;
            this.cancelEdit();
            this.loadBanners();
          },
          error: err => {
            this.errorMessage = 'Failed to update banner: ' + (err.error?.message || err.statusText);
            this.isLoading = false;
            console.error(err);
          }
        });
      } else {
        // Create new banner
        this.http.post(this.API_BASE, formData, {
          headers
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
          next: () => {
            this.successMessage = 'Banner created successfully';
            this.isLoading = false;
            this.resetForm();
            this.loadBanners();
          },
          error: err => {
            this.errorMessage = 'Failed to create banner: ' + (err.error?.message || err.statusText);
            this.isLoading = false;
            console.error(err);
          }
        });
      }
    }
    deleteBanner(id) {
      if (!confirm('Are you sure you want to delete this banner?')) {
        return;
      }
      this.isLoading = true;
      this.errorMessage = '';
      const token = this.getAdminToken();
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
      this.http.delete(`${this.API_BASE}/${id}`, {
        headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
        next: () => {
          this.successMessage = 'Banner deleted successfully';
          this.isLoading = false;
          this.loadBanners();
        },
        error: err => {
          this.errorMessage = 'Failed to delete banner: ' + (err.error?.message || err.statusText);
          this.isLoading = false;
          console.error(err);
        }
      });
    }
    toggleActive(banner) {
      if (!banner.id) return;
      const token = this.getAdminToken();
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
      const updatedBanner = {
        ...banner,
        is_active: !banner.is_active
      };
      this.http.put(`${this.API_BASE}/${banner.id}`, updatedBanner, {
        headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
        next: () => {
          banner.is_active = !banner.is_active;
        },
        error: err => {
          this.errorMessage = 'Failed to toggle banner status';
          console.error(err);
        }
      });
    }
    resetForm() {
      this.form = {
        label: '',
        title: '',
        cta_text: 'Shop Now',
        cta_link: '#',
        background_color: 'linear-gradient(135deg, #D946EF 0%, #9333EA 100%)',
        display_order: 0,
        is_active: true
      };
      this.selectedFile = null;
      this.previewUrl = null;
      this.editingId = null;
      // Reset color pickers to defaults
      this.gradientStartColor = '#D946EF';
      this.gradientEndColor = '#9333EA';
      this.gradientAngle = 135;
    }
    getAdminToken() {
      const direct = localStorage.getItem('admin_token');
      if (direct) return direct;
      try {
        const user = JSON.parse(localStorage.getItem('admin_user') || '{}');
        if (user?.id) return `admin-token-${user.id}`;
      } catch {}
      return '';
    }
    // ── New Products Banner ──────────────────────────────────────
    loadNpBannerCurrentImage() {
      this.http.get(`${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/new-products-banner`).subscribe({
        next: res => {
          this.npBannerCurrentUrl = res?.image_url || '';
        },
        error: () => {
          this.npBannerCurrentUrl = '';
        }
      });
    }
    onNpBannerFileSelected(event) {
      const input = event.target;
      if (input.files && input.files.length > 0) {
        this.npBannerFile = input.files[0];
        this.npBannerFileName = input.files[0].name;
        const reader = new FileReader();
        reader.onload = e => {
          this.npBannerPreview = e.target?.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    saveNpBanner() {
      if (!this.npBannerFile && !this.npBannerImageUrl) {
        this.npBannerError = 'Please upload a file or enter an image URL.';
        return;
      }
      this.npBannerIsSaving = true;
      this.npBannerError = '';
      this.npBannerSuccess = '';
      const token = this.getAdminToken();
      const headers = token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      }) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      const formData = new FormData();
      if (this.npBannerFile) formData.append('image', this.npBannerFile);
      if (this.npBannerImageUrl) formData.append('image_url', this.npBannerImageUrl);
      this.http.post(this.NP_BANNER_API, formData, {
        headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
        next: res => {
          this.npBannerSuccess = 'Banner image updated successfully!';
          this.npBannerCurrentUrl = res?.banner?.image_url || this.npBannerPreview || this.npBannerImageUrl;
          this.npBannerFile = null;
          this.npBannerFileName = '';
          this.npBannerPreview = '';
          this.npBannerImageUrl = '';
          this.npBannerIsSaving = false;
        },
        error: err => {
          this.npBannerError = 'Failed to save: ' + (err.error?.error || err.statusText);
          this.npBannerIsSaving = false;
        }
      });
    }
    closeAlert() {
      this.errorMessage = '';
      this.successMessage = '';
    }
    // ── Flash Deals Banner ───────────────────────────────────────
    loadFlashDealsBanner() {
      this.http.get(`${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/flash-deals-banner`).subscribe({
        next: res => {
          this.fdBannerTitle = res?.main_title || 'Festive Offers You\'ll Love';
          this.fdBannerDescription = res?.description || 'Exclusive Deals on Our Most Loved Bangles';
          this.fdBannerShopLink = res?.shop_link || '/shop';
          this.fdBannerCurrentUrl = res?.background_image_url || '';
        },
        error: () => {
          this.fdBannerTitle = 'Festive Offers You\'ll Love';
          this.fdBannerDescription = 'Exclusive Deals on Our Most Loved Bangles';
          this.fdBannerShopLink = '/shop';
          this.fdBannerCurrentUrl = '';
        }
      });
    }
    onFlashDealsBannerFileSelected(event) {
      const input = event.target;
      if (input.files && input.files.length > 0) {
        this.fdBannerFile = input.files[0];
        this.fdBannerFileName = input.files[0].name;
        const reader = new FileReader();
        reader.onload = e => {
          this.fdBannerPreview = e.target?.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    saveFlashDealsBanner() {
      if (!this.fdBannerTitle || !this.fdBannerDescription) {
        this.fdBannerError = 'Please fill in all required fields.';
        return;
      }
      this.fdBannerIsSaving = true;
      this.fdBannerError = '';
      this.fdBannerSuccess = '';
      const token = this.getAdminToken();
      const headers = token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      }) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
      const formData = new FormData();
      formData.append('main_title', this.fdBannerTitle);
      formData.append('description', this.fdBannerDescription);
      formData.append('shop_link', this.fdBannerShopLink || '/shop');
      if (this.fdBannerFile) {
        formData.append('image', this.fdBannerFile);
      }
      this.http.post(this.FD_BANNER_API, formData, {
        headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
        next: res => {
          this.fdBannerSuccess = 'Flash Deals banner updated successfully!';
          this.fdBannerCurrentUrl = res?.background_image_url || this.fdBannerPreview || '';
          this.fdBannerFile = null;
          this.fdBannerFileName = '';
          this.fdBannerPreview = '';
          this.fdBannerIsSaving = false;
          // Reload after 1 second
          setTimeout(() => this.loadFlashDealsBanner(), 1000);
        },
        error: err => {
          this.fdBannerError = 'Failed to save: ' + (err.error?.error || err.error?.message || err.statusText);
          this.fdBannerIsSaving = false;
        }
      });
    }
    trackByBannerId(index, banner) {
      return banner.id || index;
    }
    static {
      this.ɵfac = function AdminBannerManagementComponent_Factory(t) {
        return new (t || AdminBannerManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AdminBannerManagementComponent,
        selectors: [["app-admin-banner-management"]],
        decls: 160,
        vars: 45,
        consts: [[1, "admin-banner-management"], [1, "page-header"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "content-wrapper"], [1, "form-section"], [1, "form-card"], [3, "ngSubmit"], ["bannerForm", "ngForm"], [1, "form-group"], ["type", "text", "name", "label", "placeholder", "e.g., SPECIAL PRODUCTS, 30% OFF THIS WEEK", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "title", "placeholder", "e.g., Keep Your Feet Cool And Comfy", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "form-row"], ["type", "text", "name", "cta_text", "placeholder", "Shop Now", 1, "form-input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "cta_link", "placeholder", "#", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "gradient-picker"], [1, "gradient-preview"], [1, "color-input-group"], [1, "color-label"], [1, "color-input-wrapper"], ["type", "color", "name", "gradientStartColor", 1, "color-input", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "name", "gradientStartColorText", "placeholder", "#D946EF", 1, "color-hex", 3, "ngModel", "ngModelChange", "change"], ["type", "color", "name", "gradientEndColor", 1, "color-input", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "name", "gradientEndColorText", "placeholder", "#9333EA", 1, "color-hex", 3, "ngModel", "ngModelChange", "change"], [1, "angle-input-group"], [1, "angle-label"], ["type", "range", "name", "gradientAngle", "min", "0", "max", "360", 1, "angle-slider", 3, "ngModel", "ngModelChange", "change"], ["type", "hidden", "name", "background_color", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "display_order", "min", "0", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "file-input-wrapper"], ["type", "file", "id", "banner-image", "accept", "image/*", 1, "file-input", 3, "change"], ["fileInput", ""], ["for", "banner-image", 1, "file-label"], ["class", "image-preview", 4, "ngIf"], [1, "form-group", "checkbox"], ["type", "checkbox", "name", "is_active", "id", "is_active", 3, "ngModel", "ngModelChange"], ["for", "is_active"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "list-section"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "banners-grid", 4, "ngIf"], [1, "admin-banner-management", "np-banner-section"], [1, "content-wrapper", "np-layout"], ["class", "np-current", 4, "ngIf"], ["class", "np-current np-empty", 4, "ngIf"], ["type", "file", "id", "np-banner-file", "accept", "image/*", 1, "file-input", 3, "change"], ["for", "np-banner-file", 1, "file-label"], ["class", "image-preview", "style", "margin-top:12px", 4, "ngIf"], [1, "np-divider"], ["type", "url", "name", "npBannerImageUrl", "placeholder", "https://example.com/banner.jpg", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "admin-banner-management", "flash-deals-section"], [1, "content-wrapper", "fd-layout"], ["class", "fd-current", 4, "ngIf"], ["class", "fd-current fd-empty", 4, "ngIf"], ["type", "text", "name", "fdBannerTitle", "placeholder", "e.g., Festive Offers You'll Love", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["name", "fdBannerDescription", "placeholder", "e.g., Exclusive Deals on Our Most Loved Bangles", "rows", "3", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "fdBannerShopLink", "placeholder", "/shop", 1, "form-input", 3, "ngModel", "ngModelChange"], ["type", "file", "id", "fd-banner-file", "accept", "image/*", 1, "file-input", 3, "change"], ["for", "fd-banner-file", 1, "file-label"], [1, "alert", "alert-error"], [1, "close-btn", 3, "click"], [1, "alert", "alert-success"], [1, "image-preview"], [3, "src", "alt"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "loading"], [1, "empty-state"], [1, "banners-grid"], ["class", "banner-card", 3, "background", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "banner-card"], [1, "banner-preview"], ["class", "banner-image", 3, "src", "alt", 4, "ngIf"], ["class", "placeholder", 4, "ngIf"], [1, "banner-content"], [1, "badge"], [1, "cta-link"], [1, "banner-meta"], [4, "ngIf"], [1, "banner-actions"], [1, "btn-toggle", 3, "title", "click"], [1, "btn", "btn-sm", "btn-edit", 3, "click"], [1, "btn", "btn-sm", "btn-delete", 3, "click"], [1, "banner-image", 3, "src", "alt"], [1, "placeholder"], [1, "np-current"], [1, "np-preview-wrap"], ["alt", "Current banner", 1, "np-preview-img", 3, "src"], [1, "np-preview-label"], [1, "np-current", "np-empty"], [1, "np-no-image"], [1, "image-preview", 2, "margin-top", "12px"], ["alt", "Preview", 3, "src"], [1, "fd-current"], [1, "fd-preview-wrap"], ["alt", "Current banner", 1, "fd-preview-img", 3, "src"], [1, "fd-preview-label"], [1, "fd-current", "fd-empty"], [1, "fd-no-image"]],
        template: function AdminBannerManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Promotional Banners Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Manage promotional banners displayed on the home page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminBannerManagementComponent_div_6_Template, 5, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdminBannerManagementComponent_div_7_Template, 5, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdminBannerManagementComponent_Template_form_ngSubmit_13_listener() {
              return ctx.saveBanner();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9)(16, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Label *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.form.label = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9)(20, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Title *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.form.title = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12)(24, "div", 9)(25, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "CTA Text");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_27_listener($event) {
              return ctx.form.cta_text = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9)(29, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "CTA Link");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.form.cta_link = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12)(33, "div", 9)(34, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Background Color (Gradient)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17)(39, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Start Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 19)(42, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_42_listener($event) {
              return ctx.gradientStartColor = $event;
            })("change", function AdminBannerManagementComponent_Template_input_change_42_listener() {
              return ctx.onGradientColorChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_43_listener($event) {
              return ctx.gradientStartColor = $event;
            })("change", function AdminBannerManagementComponent_Template_input_change_43_listener() {
              return ctx.onGradientColorChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17)(45, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "End Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19)(48, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_48_listener($event) {
              return ctx.gradientEndColor = $event;
            })("change", function AdminBannerManagementComponent_Template_input_change_48_listener() {
              return ctx.onGradientColorChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_49_listener($event) {
              return ctx.gradientEndColor = $event;
            })("change", function AdminBannerManagementComponent_Template_input_change_49_listener() {
              return ctx.onGradientColorChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24)(51, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Gradient Angle: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_55_listener($event) {
              return ctx.gradientAngle = $event;
            })("change", function AdminBannerManagementComponent_Template_input_change_55_listener() {
              return ctx.onGradientColorChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_56_listener($event) {
              return ctx.form.background_color = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 9)(58, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Display Order");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_60_listener($event) {
              return ctx.form.display_order = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 9)(62, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Banner Image (Optional)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 29)(65, "input", 30, 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminBannerManagementComponent_Template_input_change_65_listener($event) {
              return ctx.onFileSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Choose Image ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "JPG or PNG (max 5MB)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, AdminBannerManagementComponent_div_71_Template, 4, 3, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 34)(73, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_73_listener($event) {
              return ctx.form.is_active = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Active");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 37)(77, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, AdminBannerManagementComponent_button_79_Template, 2, 0, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 40)(81, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Active Banners");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, AdminBannerManagementComponent_div_83_Template, 3, 0, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, AdminBannerManagementComponent_div_84_Template, 3, 0, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, AdminBannerManagementComponent_div_85_Template, 2, 2, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 44)(87, "div", 1)(88, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "New Products Section \u2014 Banner Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Upload the background image displayed in the left panel of the \"New Products\" section on the homepage");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, AdminBannerManagementComponent_div_92_Template, 5, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, AdminBannerManagementComponent_div_93_Template, 5, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, AdminBannerManagementComponent_div_95_Template, 7, 1, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, AdminBannerManagementComponent_div_96_Template, 5, 0, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 5)(98, "div", 6)(99, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Update Banner Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 9)(102, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Upload Image File");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 29)(105, "input", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminBannerManagementComponent_Template_input_change_105_listener($event) {
              return ctx.onNpBannerFileSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "label", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Choose Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, AdminBannerManagementComponent_div_110_Template, 4, 1, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\u2014 or \u2014");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 9)(114, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Image URL");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "input", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_116_listener($event) {
              return ctx.npBannerImageUrl = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 37)(118, "button", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_Template_button_click_118_listener() {
              return ctx.saveNpBanner();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 54)(121, "div", 1)(122, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "TOP FLASH DEALS Banner Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Configure the \"Festive Offers You'll Love\" banner title, description, shop link, and background image");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, AdminBannerManagementComponent_div_126_Template, 5, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, AdminBannerManagementComponent_div_127_Template, 5, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, AdminBannerManagementComponent_div_129_Template, 7, 1, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, AdminBannerManagementComponent_div_130_Template, 5, 0, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 5)(132, "div", 6)(133, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Update Flash Deals Banner");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 9)(136, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Main Title *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "input", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_138_listener($event) {
              return ctx.fdBannerTitle = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 9)(140, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Description *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "textarea", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_textarea_ngModelChange_142_listener($event) {
              return ctx.fdBannerDescription = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 9)(144, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Shop Now Link");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "input", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminBannerManagementComponent_Template_input_ngModelChange_146_listener($event) {
              return ctx.fdBannerShopLink = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 9)(148, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Background Banner Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 29)(151, "input", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminBannerManagementComponent_Template_input_change_151_listener($event) {
              return ctx.onFlashDealsBannerFileSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "label", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Choose Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](156, AdminBannerManagementComponent_div_156_Template, 4, 1, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 37)(158, "button", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminBannerManagementComponent_Template_button_click_158_listener() {
              return ctx.saveFlashDealsBanner();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.editingId ? "Edit Banner" : "Create New Banner");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.cta_text);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.cta_link);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.form.background_color);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gradientStartColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gradientStartColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gradientEndColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gradientEndColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.gradientAngle, "\u00B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gradientAngle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.background_color);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.display_order);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.previewUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.is_active);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.editingId ? "Update Banner" : "Create Banner", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editingId);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.banners.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.banners.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.npBannerError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.npBannerSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.npBannerCurrentUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.npBannerCurrentUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.npBannerFileName || "JPG or PNG (max 5 MB)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.npBannerPreview);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.npBannerImageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.npBannerIsSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.npBannerIsSaving ? "Saving\u2026" : "Save Banner Image", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fdBannerError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fdBannerSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fdBannerCurrentUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fdBannerCurrentUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fdBannerTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fdBannerDescription);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fdBannerShopLink);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fdBannerFileName || "JPG or PNG (max 5 MB)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fdBannerPreview);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.fdBannerIsSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.fdBannerIsSaving ? "Saving\u2026" : "Save Banner Configuration", " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
        styles: [".admin-banner-management[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f3a5f;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 0.95rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%] {\n  background: #fee;\n  color: #c33;\n  border: 1px solid #fcc;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background: #efe;\n  color: #3c3;\n  border: 1px solid #cfc;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: inherit;\n  padding: 0;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n@media (max-width: 1024px) {\n  .admin-banner-management[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f3a5f;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 0.9rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]), .admin-banner-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:not([type=checkbox]), .admin-banner-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  font-family: inherit;\n  transition: border-color 0.3s ease;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):focus, .admin-banner-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:not([type=checkbox]):focus, .admin-banner-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D946EF;\n  box-shadow: 0 0 0 3px rgba(217, 70, 239, 0.1);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  color: #666;\n  font-size: 0.85rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-group.checkbox[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-group.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .admin-banner-management[_ngcontent-%COMP%]   .form-group.checkbox[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-group.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  cursor: pointer;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 600px) {\n  .admin-banner-management[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.admin-banner-management[_ngcontent-%COMP%]   .file-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .file-input-wrapper[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .file-input-wrapper[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.75rem 1.5rem;\n  background: #D946EF;\n  color: white;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: background 0.3s ease;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .file-input-wrapper[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%]:hover {\n  background: #b836c1;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  position: relative;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 250px;\n  border-radius: 8px;\n  border: 2px solid #eee;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.5rem;\n  color: #666;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.95rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: #D946EF;\n  color: white;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b836c1;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(217, 70, 239, 0.3);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #333;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .list-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #1f3a5f;\n  margin-bottom: 1.5rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #666;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: white;\n  border-radius: 12px;\n  color: #666;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banners-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  gap: 1.5rem;\n  align-items: center;\n  padding: 1.5rem;\n  border-radius: 12px;\n  color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  transition: transform 0.3s ease;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-preview[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 100px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.2);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-preview[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-preview[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.1);\n  font-size: 0.75rem;\n  text-align: center;\n  padding: 0.5rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .badge.inactive[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .cta-link[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.5rem;\n  font-size: 0.8rem;\n  opacity: 0.8;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   .btn-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid white;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   .btn-toggle.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.4);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   .btn-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.85rem;\n  transition: all 0.3s ease;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   .btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  font-size: 0.8rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   .btn.btn-edit[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n  color: white;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   .btn.btn-edit[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   .btn.btn-delete[_ngcontent-%COMP%] {\n  background: rgba(255, 75, 75, 0.3);\n  color: white;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   .btn.btn-delete[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 75, 75, 0.6);\n}\n@media (max-width: 768px) {\n  .admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-preview[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 150px;\n  }\n  .admin-banner-management[_ngcontent-%COMP%]   .banner-card[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .gradient-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 120px;\n  border-radius: 8px;\n  border: 2px solid #ddd;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #333;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%]   .color-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%]   .color-input-wrapper[_ngcontent-%COMP%]   .color-input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ddd;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%]   .color-input-wrapper[_ngcontent-%COMP%]   .color-input[_ngcontent-%COMP%]:hover {\n  border-color: #D946EF;\n  box-shadow: 0 0 0 3px rgba(217, 70, 239, 0.1);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%]   .color-input-wrapper[_ngcontent-%COMP%]   .color-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D946EF;\n  box-shadow: 0 0 0 3px rgba(217, 70, 239, 0.2);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%]   .color-input-wrapper[_ngcontent-%COMP%]   .color-hex[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-family: monospace;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%]   .color-input-wrapper[_ngcontent-%COMP%]   .color-hex[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D946EF;\n  box-shadow: 0 0 0 3px rgba(217, 70, 239, 0.1);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .angle-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .angle-input-group[_ngcontent-%COMP%]   .angle-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #333;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .angle-input-group[_ngcontent-%COMP%]   .angle-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #D946EF;\n  font-size: 1rem;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .angle-input-group[_ngcontent-%COMP%]   .angle-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  background: linear-gradient(to right, #ddd 0%, #D946EF 100%);\n  outline: none;\n  appearance: none;\n  cursor: pointer;\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .angle-input-group[_ngcontent-%COMP%]   .angle-slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #D946EF;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(217, 70, 239, 0.4);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .angle-input-group[_ngcontent-%COMP%]   .angle-slider[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {\n  transform: scale(1.2);\n  box-shadow: 0 4px 8px rgba(217, 70, 239, 0.6);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .angle-input-group[_ngcontent-%COMP%]   .angle-slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #D946EF;\n  cursor: pointer;\n  border: none;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(217, 70, 239, 0.4);\n}\n.admin-banner-management[_ngcontent-%COMP%]   .gradient-picker[_ngcontent-%COMP%]   .angle-input-group[_ngcontent-%COMP%]   .angle-slider[_ngcontent-%COMP%]::-moz-range-thumb:hover {\n  transform: scale(1.2);\n  box-shadow: 0 4px 8px rgba(217, 70, 239, 0.6);\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.np-banner-section[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding-top: 8px;\n  border-top: 2px solid #e2e8f0;\n}\n.np-banner-section[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #b07d52;\n}\n.np-banner-section[_ngcontent-%COMP%]   .np-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.np-banner-section[_ngcontent-%COMP%]   .np-current[_ngcontent-%COMP%] {\n  flex: 0 0 260px;\n}\n.np-banner-section[_ngcontent-%COMP%]   .np-current[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 12px;\n}\n.np-banner-section[_ngcontent-%COMP%]   .np-preview-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.np-banner-section[_ngcontent-%COMP%]   .np-preview-img[_ngcontent-%COMP%] {\n  display: block;\n  width: 260px;\n  height: 340px;\n  object-fit: cover;\n}\n.np-banner-section[_ngcontent-%COMP%]   .np-preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  text-align: center;\n  padding: 6px 0;\n}\n.np-banner-section[_ngcontent-%COMP%]   .np-no-image[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 160px;\n  border: 2px dashed #d1d5db;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n  font-size: 13px;\n  text-align: center;\n  padding: 16px;\n}\n.np-banner-section[_ngcontent-%COMP%]   .np-divider[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n  margin: 12px 0;\n}\n\n.flash-deals-section[_ngcontent-%COMP%]   .fd-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 2rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .flash-deals-section[_ngcontent-%COMP%]   .fd-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.flash-deals-section[_ngcontent-%COMP%]   .fd-current[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0 0 12px;\n}\n.flash-deals-section[_ngcontent-%COMP%]   .fd-preview-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.flash-deals-section[_ngcontent-%COMP%]   .fd-preview-img[_ngcontent-%COMP%] {\n  display: block;\n  width: 280px;\n  height: 320px;\n  object-fit: cover;\n}\n.flash-deals-section[_ngcontent-%COMP%]   .fd-preview-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  text-align: center;\n  padding: 6px 0;\n}\n.flash-deals-section[_ngcontent-%COMP%]   .fd-no-image[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 160px;\n  border: 2px dashed #d1d5db;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n  font-size: 13px;\n  text-align: center;\n  padding: 16px;\n}\n.flash-deals-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 14px;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  resize: vertical;\n  transition: border-color 0.3s ease;\n}\n.flash-deals-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #C4956A;\n  box-shadow: 0 0 0 3px rgba(196, 149, 106, 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tYmFubmVyLW1hbmFnZW1lbnQvYWRtaW4tYmFubmVyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNOO0FBRUk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQU47QUFJRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUZKO0FBSUk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUhOO0FBTUk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKTjtBQU1NO0VBQ0UsWUFBQTtBQUpSO0FBU0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBUEo7QUFTSTtFQUxGO0lBTUksMEJBQUE7RUFOSjtBQUNGO0FBVUk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBUk47QUFVTTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFSUjtBQVdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVRSO0FBY0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFaSjtBQWNJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVpOO0FBZUk7O0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBYk47QUFlTTs7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBQVpSO0FBZ0JJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFkTjtBQWlCSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBZk47QUFpQk07RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBZlI7QUFrQk07RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQWhCUjtBQXFCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFuQko7QUFxQkk7RUFMRjtJQU1JLDBCQUFBO0VBbEJKO0FBQ0Y7QUF5QkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBdkJKO0FBeUJJO0VBQ0UsYUFBQTtBQXZCTjtBQTBCSTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBeEJOO0FBMEJNO0VBQ0UsbUJBQUE7QUF4QlI7QUE2QkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBM0JKO0FBNkJJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTNCTjtBQThCSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUE1Qk47QUFnQ0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBOUJKO0FBZ0NJO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBOUJOO0FBZ0NNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBOUJSO0FBaUNNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBL0JSO0FBaUNRO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhDQUFBO0FBL0JWO0FBbUNNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBakNSO0FBbUNRO0VBQ0UsbUJBQUE7QUFqQ1Y7QUF3Q0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQXRDTjtBQTBDRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUF4Q0o7QUEyQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUF6Q0o7QUE0Q0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQTFDSjtBQTZDRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLCtCQUFBO0FBM0NKO0FBNkNJO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQTNDTjtBQThDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBNUNOO0FBOENNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTVDUjtBQStDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBN0NSO0FBa0RNO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBaERSO0FBbURNO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQWpEUjtBQW1EUTtFQUNFLFlBQUE7QUFqRFY7QUFxRE07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQW5EUjtBQXNETTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFwRFI7QUF3REk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQXRETjtBQXdETTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF0RFI7QUF3RFE7RUFDRSxvQ0FBQTtBQXREVjtBQXlEUTtFQUNFLG9DQUFBO0FBdkRWO0FBMkRNO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBekRSO0FBMkRRO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQXpEVjtBQTREUTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQTFEVjtBQTREVTtFQUNFLG9DQUFBO0FBMURaO0FBOERRO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0FBNURWO0FBOERVO0VBQ0Usa0NBQUE7QUE1RFo7QUFrRUk7RUE1SUY7SUE2SUksMEJBQUE7RUEvREo7RUFpRUk7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQS9ETjtFQWtFSTtJQUNFLFdBQUE7SUFDQSx5QkFBQTtFQWhFTjtBQUNGO0FBcUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFuRUo7QUFxRUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBbkVOO0FBc0VJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQXBFTjtBQXNFTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBcEVSO0FBdUVNO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQXJFUjtBQXVFUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQXJFVjtBQXVFVTtFQUNFLHFCQUFBO0VBQ0EsNkNBQUE7QUFyRVo7QUF3RVU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBQXRFWjtBQTBFUTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBeEVWO0FBMEVVO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QUF4RVo7QUE4RUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBNUVOO0FBOEVNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUE1RVI7QUE4RVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQTVFVjtBQWdGTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUE5RVI7QUFnRlE7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0VBQ0EsNkNBQUE7QUE5RVY7QUFnRlU7RUFDRSxxQkFBQTtFQUNBLDZDQUFBO0FBOUVaO0FBa0ZRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUFBLHlCQUFBO0VBQ0EsNkNBQUE7QUFoRlY7QUFrRlU7RUFDRSxxQkFBQTtFQUNBLDZDQUFBO0FBaEZaOztBQXdGQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBckZGO0VBdUZBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBckZGO0FBQ0Y7QUF5RkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUF2RkY7QUF5RkU7RUFDRSxjQUFBO0FBdkZKO0FBMEZFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUF4Rko7QUEyRkU7RUFDRSxlQUFBO0FBekZKO0FBMkZJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBekZOO0FBNkZFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQTNGSjtBQThGRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBNUZKO0FBK0ZFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE3Rko7QUFnR0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBOUZKO0FBaUdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUEvRko7O0FBd0dFO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBckdKO0FBdUdJO0VBTkY7SUFPSSwwQkFBQTtFQXBHSjtBQUNGO0FBd0dJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQXRHTjtBQTBHRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUF4R0o7QUEyR0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQXpHSjtBQTRHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBMUdKO0FBNkdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQTNHSjtBQStHSTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUE3R047QUErR007RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4Q0FBQTtBQTdHUiIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1iYW5uZXItbWFuYWdlbWVudCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICAucGFnZS1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICBoMSB7XG4gICAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzFmM2E1ZjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5hbGVydCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZTtcblxuICAgICYuYWxlcnQtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZDogI2ZlZTtcbiAgICAgIGNvbG9yOiAjYzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZjYztcbiAgICB9XG5cbiAgICAmLmFsZXJ0LXN1Y2Nlc3Mge1xuICAgICAgYmFja2dyb3VuZDogI2VmZTtcbiAgICAgIGNvbG9yOiAjM2MzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NmYztcbiAgICB9XG5cbiAgICAuY2xvc2UtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAycmVtO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tc2VjdGlvbiB7XG4gICAgLmZvcm0tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDAgMCAxLjVyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMWYzYTVmO1xuICAgICAgfVxuXG4gICAgICBmb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGxhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cblxuICAgIGlucHV0Om5vdChbdHlwZT1cImNoZWNrYm94XCJdKSxcbiAgICB0ZXh0YXJlYSB7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Q5NDZFRjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjE3LCA3MCwgMjM5LCAwLjEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNtYWxsIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB9XG5cbiAgICAmLmNoZWNrYm94IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjVyZW07XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tcm93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWlucHV0IHtcbiAgICBAZXh0ZW5kIGlucHV0O1xuICB9XG5cbiAgLmZpbGUtaW5wdXQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAuZmlsZS1pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5maWxlLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgICAgYmFja2dyb3VuZDogI0Q5NDZFRjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiODM2YzE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmltYWdlLXByZXZpZXcge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICB9XG5cbiAgICBzbWFsbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRDk0NkVGO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2I4MzZjMTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIxNywgNzAsIDIzOSwgMC4zKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICBjb2xvcjogIzMzMztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxpc3Qtc2VjdGlvbiB7XG4gICAgaDIge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMWYzYTVmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5sb2FkaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxuXG4gIC5lbXB0eS1zdGF0ZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG5cbiAgLmJhbm5lcnMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEuNXJlbTtcbiAgfVxuXG4gIC5iYW5uZXItY2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyMHB4IDFmciBhdXRvO1xuICAgIGdhcDogMS41cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC5iYW5uZXItcHJldmlldyB7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAgICAgLmJhbm5lci1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuXG4gICAgICAucGxhY2Vob2xkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5iYW5uZXItY29udGVudCB7XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMC41cmVtIDAgMCAwO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLmJhZGdlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcblxuICAgICAgICAmLmluYWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmN0YS1saW5rIHtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIH1cblxuICAgICAgLmJhbm5lci1tZXRhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJhbm5lci1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDAuNXJlbTtcblxuICAgICAgLmJ0bi10b2dnbGUge1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgICAmLmJ0bi1zbSB7XG4gICAgICAgICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWVkaXQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1kZWxldGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA3NSwgNzUsIDAuMyk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNzUsIDc1LCAwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cbiAgICAgIC5iYW5uZXItcHJldmlldyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICAuYmFubmVyLWFjdGlvbnMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBHcmFkaWVudCBDb2xvciBQaWNrZXIgU3R5bGVzXG4gIC5ncmFkaWVudC1waWNrZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXG4gICAgLmdyYWRpZW50LXByZXZpZXcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cblxuICAgIC5jb2xvci1pbnB1dC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMC41cmVtO1xuXG4gICAgICAuY29sb3ItbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuXG4gICAgICAuY29sb3ItaW5wdXQtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5jb2xvci1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNEOTQ2RUY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyMTcsIDcwLCAyMzksIDAuMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRDk0NkVGO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjE3LCA3MCwgMjM5LCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2xvci1oZXgge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0Q5NDZFRjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIxNywgNzAsIDIzOSwgMC4xKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW5nbGUtaW5wdXQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDAuNzVyZW07XG5cbiAgICAgIC5hbmdsZS1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBjb2xvcjogI0Q5NDZFRjtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFuZ2xlLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkZGQgMCUsICNEOTQ2RUYgMTAwJSk7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNEOTQ2RUY7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMjE3LCA3MCwgMjM5LCAwLjQpO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgyMTcsIDcwLCAyMzksIDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDk0NkVGO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgyMTcsIDcwLCAyMzksIDAuNCk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDIxNywgNzAsIDIzOSwgMC42KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgTmV3IFByb2R1Y3RzIEJhbm5lciBzZWN0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm5wLWJhbm5lci1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlMmU4ZjA7XG5cbiAgLnBhZ2UtaGVhZGVyIGgxIHtcbiAgICBjb2xvcjogI2IwN2Q1MjtcbiAgfVxuXG4gIC5ucC1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5ucC1jdXJyZW50IHtcbiAgICBmbGV4OiAwIDAgMjYwcHg7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5ucC1wcmV2aWV3LXdyYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwwLjEyKTtcbiAgfVxuXG4gIC5ucC1wcmV2aWV3LWltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGhlaWdodDogMzQwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAubnAtcHJldmlldy1sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41NSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICB9XG5cbiAgLm5wLW5vLWltYWdlIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2QxZDVkYjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogIzljYTNhZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAubnAtZGl2aWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWNhM2FmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgfVxufVxuXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcbi8vIEZMQVNIIERFQUxTIEJBTk5FUiBTRUNUSU9OXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcblxuLmZsYXNoLWRlYWxzLXNlY3Rpb24ge1xuICAuZmQtbGF5b3V0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICAgIGdhcDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgfVxuXG4gIC5mZC1jdXJyZW50IHtcbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICB9XG4gIH1cblxuICAuZmQtcHJldmlldy13cmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsMC4xMik7XG4gIH1cblxuICAuZmQtcHJldmlldy1pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG5cbiAgLmZkLXByZXZpZXctbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNTUpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHggMDtcbiAgfVxuXG4gIC5mZC1uby1pbWFnZSB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNkMWQ1ZGI7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICM5Y2EzYWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tY2FyZCB7XG4gICAgdGV4dGFyZWEge1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6ICNDNDk1NkE7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE5NiwgMTQ5LCAxMDYsIDAuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return AdminBannerManagementComponent;
})();

/***/ }),

/***/ 1574:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ 4976);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ 4714);
/* harmony import */ var _layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/admin-layout.component */ 5108);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ 5064);
/* harmony import */ var _slider_settings_slider_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-settings/slider-settings.component */ 3388);
/* harmony import */ var _home_category_control_home_category_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-category-control/home-category-control.component */ 744);
/* harmony import */ var _queue_monitor_queue_monitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queue-monitor/queue-monitor.component */ 1748);
/* harmony import */ var _currency_settings_currency_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency-settings/currency-settings.component */ 7487);
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reviews/reviews.component */ 2764);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ 628);
/* harmony import */ var _admin_banner_management_admin_banner_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-banner-management/admin-banner-management.component */ 8520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);














const routes = [{
  path: '',
  component: _layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__.AdminLayoutComponent,
  children: [{
    path: '',
    redirectTo: 'add-product',
    pathMatch: 'full'
  }, {
    path: 'add-product',
    component: _admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent
  }, {
    path: 'products',
    component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.AdminProductListComponent
  }, {
    path: 'users',
    component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__.UsersComponent
  }, {
    path: 'slider-settings',
    component: _slider_settings_slider_settings_component__WEBPACK_IMPORTED_MODULE_4__.SliderSettingsComponent
  }, {
    path: 'home-category-control',
    component: _home_category_control_home_category_control_component__WEBPACK_IMPORTED_MODULE_5__.HomeCategoryControlComponent
  }, {
    path: 'ai-queue',
    component: _queue_monitor_queue_monitor_component__WEBPACK_IMPORTED_MODULE_6__.QueueMonitorComponent
  }, {
    path: 'reviews',
    component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__.ReviewsComponent
  }, {
    path: 'currency-settings',
    component: _currency_settings_currency_settings_component__WEBPACK_IMPORTED_MODULE_7__.CurrencySettingsComponent
  }, {
    path: 'settings',
    component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__.AdminSettingsComponent
  }, {
    path: 'manage-banners',
    component: _admin_banner_management_admin_banner_management_component__WEBPACK_IMPORTED_MODULE_10__.AdminBannerManagementComponent
  }]
}];
let AdminRoutingModule = /*#__PURE__*/(() => {
  class AdminRoutingModule {
    static {
      this.ɵfac = function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: AdminRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
      });
    }
  }
  return AdminRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 4976:
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_services_currency_preference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/currency-preference.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_pipes_display_currency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pipes/display-currency.pipe */ 7316);








function AdminComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminComponent_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", cat_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cat_r15.name);
  }
}
function AdminComponent_p_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Saved as USD in database: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 1, ctx_r2.pricePreviewInUsd, "1.0-2"), "");
  }
}
function AdminComponent_div_179_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_179_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminComponent_div_179_div_3_span_2_Template, 2, 0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", img_r17.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", "Saved image");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", img_r17.is_primary_image);
  }
}
function AdminComponent_div_179_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Current saved images (will be replaced if you upload new ones):");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AdminComponent_div_179_div_3_Template, 3, 3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.editExistingImages);
  }
}
function AdminComponent_div_180_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 79)(1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_div_180_div_3_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const i_r21 = restoredCtx.index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.removeSelectedImage(i_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_div_180_div_3_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const i_r21 = restoredCtx.index;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.setPrimaryImage(i_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const img_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-primary", img_r20.isPrimary);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", img_r20.previewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", img_r20.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](img_r20.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", img_r20.isPrimary);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", img_r20.isPrimary ? "\u2605 Primary" : "Set as Primary", " ");
  }
}
function AdminComponent_div_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "New images to upload:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AdminComponent_div_180_div_3_Template, 8, 8, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.selectedImages);
  }
}
function AdminComponent_ng_container_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.editMode ? "Update Product" : "Upload Product", " ");
  }
}
function AdminComponent_ng_container_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.editMode ? "Updating..." : "Uploading...", " ");
  }
}
function AdminComponent_p_184_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.successMessage);
  }
}
function AdminComponent_p_185_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.errorMessage);
  }
}
function AdminComponent_p_186_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("success", ctx_r9.aiIndexingState === "success")("error", ctx_r9.aiIndexingState === "error")("info", ctx_r9.aiIndexingState === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r9.aiIndexingMessage, " ");
  }
}
function AdminComponent_span_191_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminComponent_p_192_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No products uploaded yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_193_tr_17_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_div_193_tr_17_ng_container_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const product_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.startEdit(product_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_div_193_tr_17_ng_container_13_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const product_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.requestDelete(product_r26.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function AdminComponent_div_193_tr_17_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_div_193_tr_17_ng_container_14_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const product_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.confirmDelete(product_r26.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_div_193_tr_17_ng_container_14_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.cancelDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function AdminComponent_div_193_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "displayCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AdminComponent_div_193_tr_17_ng_container_13_Template, 5, 0, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AdminComponent_div_193_tr_17_ng_container_14_Template, 7, 0, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("editing-row", ctx_r25.editingProductId === product_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", product_r26.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", product_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r26.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 10, product_r26.price, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.confirmDeleteId !== product_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.confirmDeleteId === product_r26.id);
  }
}
function AdminComponent_div_193_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 87)(1, "table")(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AdminComponent_div_193_tr_17_Template, 15, 13, "tr", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.products);
  }
}
let AdminComponent = /*#__PURE__*/(() => {
  class AdminComponent {
    constructor(http, route, currencyPreferenceService) {
      this.http = http;
      this.route = route;
      this.currencyPreferenceService = currencyPreferenceService;
      this.apiBaseUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.products;
      this.categoryApiBaseUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.categories;
      // Form fields
      this.productName = '';
      this.productPrice = null;
      this.productCategoryId = null;
      this.productDescription = '';
      this.productSeoTitle = '';
      this.productSeoMetaDescription = '';
      this.productTags = '';
      this.productType = '';
      this.productSubCategory = '';
      this.productPrimaryColor = '';
      this.productColor = '';
      this.productColorFamily = '';
      this.productSize = '';
      this.productDesign = '';
      this.productPattern = '';
      this.productStyle = '';
      this.productMaterial = '';
      this.productFinish = '';
      this.productOccasion = '';
      this.productEmbellishments = '';
      this.productCraftType = '';
      this.productTexture = '';
      this.productVisualDensity = '';
      this.productShape = '';
      this.productUsage = '';
      this.productAestheticTags = '';
      this.productCulturalInference = '';
      this.productQualityInference = '';
      this.selectedImages = [];
      this.selectedAiProvider = 'gemini';
      // Mode
      this.editMode = false;
      this.editingProductId = null;
      this.editExistingImages = []; // images already saved on the product
      // UI state
      this.isSubmitting = false;
      this.isLoadingProducts = false;
      this.isUpdatingAiMode = false;
      this.isGeneratingDescription = false;
      this.confirmDeleteId = null;
      this.successMessage = '';
      this.errorMessage = '';
      this.aiIndexingMessage = '';
      this.aiIndexingState = 'info';
      this.selectedAiMode = 'async';
      this.activeAiMode = 'async';
      this.aiModeSource = 'env';
      this.adminId = null;
      this.products = [];
      this.productCategories = [];
    }
    ngOnInit() {
      this.adminId = this.getAdminIdFromSession();
      this.loadAiIndexingMode();
      this.loadAiProviderPreference();
      this.loadProducts();
      this.loadProductCategories();
      // Check for edit mode via query parameters
      this.route.queryParamMap.subscribe(params => {
        const productId = params.get('id');
        if (productId) {
          const id = parseInt(productId, 10);
          if (!isNaN(id)) {
            this.loadProductForEdit(id);
          }
        }
      });
    }
    ngOnDestroy() {
      this.revokeAllPreviews();
    }
    onImagesSelected(event) {
      const input = event.target;
      const files = Array.from(input.files ?? []);
      const allowedTypes = ['image/jpeg', 'image/png'];
      const invalid = files.filter(f => !allowedTypes.includes(f.type));
      if (invalid.length) {
        this.errorMessage = 'Only JPG and PNG images are allowed.';
        input.value = '';
        return;
      }
      this.errorMessage = '';
      const newImages = files.map(f => ({
        file: f,
        previewUrl: URL.createObjectURL(f),
        isPrimary: false
      }));
      this.selectedImages = [...this.selectedImages, ...newImages];
      // Ensure at least one primary is set
      if (this.selectedImages.length > 0 && !this.selectedImages.some(img => img.isPrimary)) {
        this.selectedImages[0].isPrimary = true;
      }
      input.value = ''; // reset so same file can be re-added later
    }

    setPrimaryImage(index) {
      this.selectedImages = this.selectedImages.map((img, i) => ({
        ...img,
        isPrimary: i === index
      }));
    }
    removeSelectedImage(index) {
      const removed = this.selectedImages[index];
      URL.revokeObjectURL(removed.previewUrl);
      this.selectedImages = this.selectedImages.filter((_, i) => i !== index);
      // Restore primary if the removed one was primary
      if (removed.isPrimary && this.selectedImages.length > 0) {
        this.selectedImages[0].isPrimary = true;
      }
    }
    saveProduct() {
      this.successMessage = '';
      this.errorMessage = '';
      this.aiIndexingMessage = '';
      this.aiIndexingState = 'info';
      if (this.editMode) {
        this.submitUpdate();
      } else {
        this.submitCreate();
      }
    }
    onDescriptionEditorInput(event) {
      const editor = event.target;
      this.productDescription = this.normalizeDescriptionHtml(editor?.innerHTML || '');
    }
    formatDescription(command) {
      const editor = document.querySelector('.description-editor');
      editor?.focus();
      document.execCommand(command, false);
      this.productDescription = this.normalizeDescriptionHtml(editor?.innerHTML || this.productDescription);
    }
    clearDescriptionFormatting() {
      const editor = document.querySelector('.description-editor');
      editor?.focus();
      document.execCommand('removeFormat', false);
      this.productDescription = this.normalizeDescriptionHtml(editor?.innerHTML || this.productDescription);
    }
    generateDescription() {
      if (this.isGeneratingDescription || this.isSubmitting) {
        return;
      }
      if (!this.selectedImages.length) {
        this.errorMessage = 'Upload at least one product image before generating AI content.';
        return;
      }
      const primaryImage = this.selectedImages.find(img => img.isPrimary)?.file || this.selectedImages[0]?.file;
      if (!primaryImage) {
        this.errorMessage = 'Select a primary image before generating AI content.';
        return;
      }
      const selectedCat = this.productCategories.find(c => c.id === this.productCategoryId);
      const categoryName = selectedCat?.name || '';
      const payload = new FormData();
      payload.append('name', this.productName.trim());
      payload.append('category', categoryName);
      payload.append('description', this.productDescription.trim());
      payload.append('color', this.productColor.trim());
      payload.append('product_type', this.productType.trim());
      payload.append('sub_category', this.productSubCategory.trim());
      payload.append('primary_color', this.productPrimaryColor.trim());
      payload.append('secondary_colors', this.productColor.trim());
      payload.append('color_family', this.productColorFamily.trim());
      payload.append('size', this.productSize.trim());
      payload.append('design', this.productDesign.trim());
      payload.append('design_elements', this.productDesign.trim());
      payload.append('pattern', this.productPattern.trim());
      payload.append('style', this.productStyle.trim());
      payload.append('material', this.productMaterial.trim());
      payload.append('material_estimated', this.productMaterial.trim());
      payload.append('finish', this.productFinish.trim());
      payload.append('occasion', this.productOccasion.trim());
      payload.append('embellishments', this.productEmbellishments.trim());
      payload.append('craft_type', this.productCraftType.trim());
      payload.append('texture', this.productTexture.trim());
      payload.append('visual_density', this.productVisualDensity.trim());
      payload.append('shape', this.productShape.trim());
      payload.append('usage', this.productUsage.trim());
      payload.append('aesthetic_tags', this.productAestheticTags.trim());
      payload.append('cultural_inference', this.productCulturalInference.trim());
      payload.append('quality_inference', this.productQualityInference.trim());
      payload.append('ai_provider', this.selectedAiProvider);
      payload.append('image', primaryImage);
      this.isGeneratingDescription = true;
      this.errorMessage = '';
      this.successMessage = '';
      this.http.post(`${this.apiBaseUrl}/generate-description`, payload).subscribe({
        next: response => {
          this.isGeneratingDescription = false;
          this.productName = response?.title?.trim() || this.productName;
          this.setProductDescription(response?.description || this.productDescription);
          this.productSeoTitle = response?.seo_title || response?.title || this.productSeoTitle || this.productName;
          this.productSeoMetaDescription = response?.seo_meta_description || this.productSeoMetaDescription;
          this.productTags = Array.isArray(response?.tags) ? response.tags.join(', ') : this.productTags;
          this.applyAiHints(response?.ai_analysis);
          this.applyDetailedAiAttributes(response?.ai_analysis_raw);
          this.successMessage = 'AI product content generated successfully.';
        },
        error: error => {
          this.isGeneratingDescription = false;
          this.errorMessage = error?.error?.message || 'AI could not generate the description right now.';
        }
      });
    }
    startEdit(product) {
      this.editMode = true;
      this.editingProductId = product.id;
      this.productName = product.name;
      this.productPrice = product.price;
      this.productCategoryId = product.product_category_id ?? null;
      const attrs = product.attributes || {};
      this.productType = attrs.product_type || '';
      this.productSubCategory = attrs.sub_category || '';
      this.productPrimaryColor = attrs.primary_color || '';
      this.productColor = Array.isArray(attrs.secondary_colors) ? attrs.secondary_colors.join(', ') : Array.isArray(product.colors) ? product.colors.join(', ') : '';
      this.productColorFamily = Array.isArray(attrs.color_family) ? attrs.color_family.join(', ') : '';
      this.productStyle = Array.isArray(attrs.style) ? attrs.style.join(', ') : '';
      this.productPattern = Array.isArray(attrs.pattern) ? attrs.pattern.join(', ') : '';
      this.productDesign = Array.isArray(attrs.design_elements) ? attrs.design_elements.join(', ') : '';
      this.productMaterial = Array.isArray(attrs.material_estimated) ? attrs.material_estimated.join(', ') : '';
      this.productFinish = attrs.finish || '';
      this.productOccasion = Array.isArray(attrs.occasion) ? attrs.occasion.join(', ') : '';
      this.productEmbellishments = Array.isArray(attrs.embellishments) ? attrs.embellishments.join(', ') : '';
      this.productCraftType = Array.isArray(attrs.craft_type) ? attrs.craft_type.join(', ') : '';
      this.productTexture = attrs.texture || '';
      this.productVisualDensity = attrs.visual_density || '';
      this.productShape = attrs.shape || '';
      this.productUsage = Array.isArray(attrs.usage) ? attrs.usage.join(', ') : '';
      this.productAestheticTags = Array.isArray(attrs.aesthetic_tags) ? attrs.aesthetic_tags.join(', ') : '';
      this.productCulturalInference = attrs.cultural_inference || '';
      this.productQualityInference = attrs.quality_inference || '';
      this.setProductDescription(product.description);
      this.productSeoTitle = product.seo_title || '';
      this.productSeoMetaDescription = product.seo_meta_description || '';
      this.productTags = product.tags || '';
      this.revokeAllPreviews();
      this.selectedImages = [];
      this.editExistingImages = product.images ? [...product.images] : [];
      this.successMessage = '';
      this.errorMessage = '';
      this.aiIndexingMessage = '';
      this.aiIndexingState = 'info';
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    cancelEdit() {
      this.editMode = false;
      this.editingProductId = null;
      this.resetForm();
    }
    requestDelete(productId) {
      this.confirmDeleteId = productId;
    }
    cancelDelete() {
      this.confirmDeleteId = null;
    }
    confirmDelete(productId) {
      this.confirmDeleteId = null;
      this.http.delete(`${this.apiBaseUrl}/${productId}`).subscribe({
        next: () => {
          this.successMessage = 'Product deleted.';
          this.loadProducts();
          if (this.editingProductId === productId) {
            this.cancelEdit();
          }
        },
        error: error => {
          this.errorMessage = error?.error?.message || 'Delete failed. Please try again.';
        }
      });
    }
    updateAiIndexingMode() {
      this.isUpdatingAiMode = true;
      this.http.patch(`${this.apiBaseUrl}/ai-indexing-mode`, {
        mode: this.selectedAiMode
      }).subscribe({
        next: response => {
          this.isUpdatingAiMode = false;
          this.activeAiMode = response.mode;
          this.selectedAiMode = response.mode;
          this.aiModeSource = response.source || 'runtime';
          this.successMessage = response.message || `AI indexing mode set to ${response.mode}.`;
          this.errorMessage = '';
        },
        error: error => {
          this.isUpdatingAiMode = false;
          this.errorMessage = error?.error?.message || 'Could not update AI indexing mode.';
        }
      });
    }
    submitCreate() {
      if (!this.productName.trim() || this.productCategoryId === null || this.productPrice === null || this.productPrice <= 0 || this.selectedImages.length === 0) {
        this.errorMessage = 'Name, category, positive price, and at least one image are required.';
        return;
      }
      const payload = this.buildFormData();
      this.isSubmitting = true;
      this.http.post(this.apiBaseUrl, payload).subscribe({
        next: response => {
          this.isSubmitting = false;
          this.successMessage = 'Product uploaded successfully.';
          this.setAiIndexingStatus(response?.ai_indexing);
          this.resetForm();
          this.loadProducts();
        },
        error: error => {
          this.isSubmitting = false;
          this.errorMessage = error?.error?.message || 'Upload failed. Please try again.';
        }
      });
    }
    submitUpdate() {
      if (!this.productName.trim() || this.productCategoryId === null || this.productPrice === null || this.productPrice <= 0) {
        this.errorMessage = 'Name, category, and positive price are required.';
        return;
      }
      const payload = this.buildFormData();
      this.isSubmitting = true;
      this.http.put(`${this.apiBaseUrl}/${this.editingProductId}`, payload).subscribe({
        next: response => {
          this.isSubmitting = false;
          this.successMessage = 'Product updated successfully.';
          this.setAiIndexingStatus(response?.ai_indexing);
          this.cancelEdit();
          this.loadProducts();
        },
        error: error => {
          this.isSubmitting = false;
          this.errorMessage = error?.error?.message || 'Update failed. Please try again.';
        }
      });
    }
    buildFormData() {
      const selectedCat = this.productCategories.find(c => c.id === this.productCategoryId);
      const categoryName = selectedCat?.name || '';
      const payload = new FormData();
      payload.append('name', this.productName.trim());
      payload.append('price', String(this.productPrice));
      payload.append('currency', this.selectedCurrency);
      if (this.adminId) {
        payload.append('admin_id', String(this.adminId));
      }
      payload.append('category', categoryName);
      if (this.productCategoryId !== null) {
        payload.append('product_category_id', String(this.productCategoryId));
      }
      payload.append('ai_provider', this.selectedAiProvider);
      payload.append('description', this.productDescription.trim());
      payload.append('seo_title', this.productSeoTitle.trim());
      payload.append('seo_meta_description', this.productSeoMetaDescription.trim());
      payload.append('tags', this.productTags.trim());
      payload.append('color', this.productColor.trim());
      payload.append('product_type', this.productType.trim());
      payload.append('sub_category', this.productSubCategory.trim());
      payload.append('primary_color', this.productPrimaryColor.trim());
      payload.append('secondary_colors', this.productColor.trim());
      payload.append('color_family', this.productColorFamily.trim());
      payload.append('size', this.productSize.trim());
      payload.append('design', this.productDesign.trim());
      payload.append('design_elements', this.productDesign.trim());
      payload.append('pattern', this.productPattern.trim());
      payload.append('style', this.productStyle.trim());
      payload.append('material', this.productMaterial.trim());
      payload.append('material_estimated', this.productMaterial.trim());
      payload.append('finish', this.productFinish.trim());
      payload.append('occasion', this.productOccasion.trim());
      payload.append('embellishments', this.productEmbellishments.trim());
      payload.append('craft_type', this.productCraftType.trim());
      payload.append('texture', this.productTexture.trim());
      payload.append('visual_density', this.productVisualDensity.trim());
      payload.append('shape', this.productShape.trim());
      payload.append('usage', this.productUsage.trim());
      payload.append('aesthetic_tags', this.productAestheticTags.trim());
      payload.append('cultural_inference', this.productCulturalInference.trim());
      payload.append('quality_inference', this.productQualityInference.trim());
      // Put the primary image first — controller marks index 0 as primary
      const sorted = [...this.selectedImages.filter(img => img.isPrimary), ...this.selectedImages.filter(img => !img.isPrimary)];
      for (const img of sorted) {
        payload.append('images', img.file);
      }
      return payload;
    }
    loadProductCategories() {
      this.http.get(_config_app_config__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.productCategories).subscribe({
        next: cats => {
          this.productCategories = cats;
        },
        error: () => {}
      });
    }
    loadProducts() {
      this.isLoadingProducts = true;
      this.http.get(this.apiBaseUrl).subscribe({
        next: response => {
          this.products = Array.isArray(response) ? response : response?.data ?? [];
          this.isLoadingProducts = false;
        },
        error: () => {
          this.isLoadingProducts = false;
          this.errorMessage = 'Could not load products from backend.';
        }
      });
    }
    loadProductForEdit(productId) {
      this.http.get(`${this.apiBaseUrl}/${productId}`).subscribe({
        next: product => {
          this.startEdit(product);
        },
        error: () => {
          this.errorMessage = 'Could not load product for editing.';
        }
      });
    }
    get pricePreviewInUsd() {
      if (this.productPrice === null || this.productPrice <= 0) {
        return null;
      }
      return this.currencyPreferenceService.convertToUsd(this.productPrice, this.selectedCurrency);
    }
    loadAiIndexingMode() {
      this.http.get(`${this.apiBaseUrl}/ai-indexing-mode`).subscribe({
        next: response => {
          this.activeAiMode = response.mode;
          this.selectedAiMode = response.mode;
          this.aiModeSource = response.source || 'env';
        },
        error: () => {
          this.errorMessage = 'Could not load AI indexing mode.';
        }
      });
    }
    loadAiProviderPreference() {
      this.http.get(`${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.adminAiQueue}/provider`).subscribe({
        next: response => {
          this.selectedAiProvider = response?.provider === 'gemini' ? 'gemini' : 'openai';
        },
        error: () => {
          this.selectedAiProvider = 'openai';
        }
      });
    }
    resetForm() {
      this.productName = '';
      this.productPrice = null;
      this.productCategoryId = null;
      this.productType = '';
      this.productSubCategory = '';
      this.productPrimaryColor = '';
      this.productColor = '';
      this.productColorFamily = '';
      this.setProductDescription('');
      this.productSeoTitle = '';
      this.productSeoMetaDescription = '';
      this.productTags = '';
      this.productSize = '';
      this.productDesign = '';
      this.productPattern = '';
      this.productStyle = '';
      this.productMaterial = '';
      this.productFinish = '';
      this.productOccasion = '';
      this.productEmbellishments = '';
      this.productCraftType = '';
      this.productTexture = '';
      this.productVisualDensity = '';
      this.productShape = '';
      this.productUsage = '';
      this.productAestheticTags = '';
      this.productCulturalInference = '';
      this.productQualityInference = '';
      this.isGeneratingDescription = false;
      this.revokeAllPreviews();
      this.selectedImages = [];
      this.editExistingImages = [];
    }
    setAiIndexingStatus(status) {
      if (!status) {
        this.aiIndexingMessage = '';
        this.aiIndexingState = 'info';
        return;
      }
      if (status.mode === 'off') {
        this.aiIndexingState = 'info';
        this.aiIndexingMessage = 'Primary image embedding is currently disabled.';
        return;
      }
      if (status.mode === 'async') {
        this.aiIndexingState = 'info';
        this.aiIndexingMessage = 'Primary image embedding queued in background.';
        return;
      }
      if (status.stored) {
        this.aiIndexingState = 'success';
        this.aiIndexingMessage = 'Primary image embedding saved to Vector DB.';
        return;
      }
      this.aiIndexingState = 'error';
      this.aiIndexingMessage = `Primary image embedding failed: ${status.message || 'Unknown error'}`;
    }
    revokeAllPreviews() {
      this.selectedImages.forEach(img => URL.revokeObjectURL(img.previewUrl));
      this.selectedImages = [];
    }
    setProductDescription(value) {
      this.productDescription = this.normalizeDescriptionHtml(value);
    }
    normalizeDescriptionHtml(value) {
      const input = String(value || '').trim();
      if (!input) {
        return '';
      }
      if (!/[<>]/.test(input)) {
        return input.split(/\n{2,}/).map(chunk => `<p>${chunk.replace(/\n/g, '<br>')}</p>`).join('');
      }
      return input.replace(/<div>/gi, '<p>').replace(/<\/div>/gi, '</p>').replace(/<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, '').trim();
    }
    applyAiHints(aiAnalysis) {
      if (!aiAnalysis) {
        return;
      }
      if (!this.productColor.trim() && aiAnalysis.colors?.length) {
        this.productColor = aiAnalysis.colors.join(', ');
      }
      if (!this.productSize.trim() && aiAnalysis.size) {
        this.productSize = aiAnalysis.size;
      }
      if (!this.productDesign.trim() && aiAnalysis.design?.length) {
        this.productDesign = aiAnalysis.design.join(', ');
      }
      if (!this.productPattern.trim() && aiAnalysis.pattern?.length) {
        this.productPattern = aiAnalysis.pattern.join(', ');
      }
      if (!this.productStyle.trim() && aiAnalysis.style?.length) {
        this.productStyle = aiAnalysis.style.join(', ');
      }
      if (!this.productMaterial.trim() && aiAnalysis.material?.length) {
        this.productMaterial = aiAnalysis.material.join(', ');
      }
    }
    applyDetailedAiAttributes(attributes) {
      if (!attributes) {
        return;
      }
      if (!this.productType.trim() && attributes.product_type) {
        this.productType = attributes.product_type;
      }
      if (!this.productSubCategory.trim() && attributes.sub_category) {
        this.productSubCategory = attributes.sub_category;
      }
      if (!this.productPrimaryColor.trim() && attributes.primary_color) {
        this.productPrimaryColor = attributes.primary_color;
      }
      if (!this.productColor.trim() && attributes.secondary_colors?.length) {
        this.productColor = attributes.secondary_colors.join(', ');
      }
      if (!this.productColorFamily.trim() && attributes.color_family?.length) {
        this.productColorFamily = attributes.color_family.join(', ');
      }
      if (!this.productMaterial.trim() && attributes.material_estimated?.length) {
        this.productMaterial = attributes.material_estimated.join(', ');
      }
      if (!this.productFinish.trim() && attributes.finish) {
        this.productFinish = attributes.finish;
      }
      if (!this.productStyle.trim() && attributes.style?.length) {
        this.productStyle = attributes.style.join(', ');
      }
      if (!this.productOccasion.trim() && attributes.occasion?.length) {
        this.productOccasion = attributes.occasion.join(', ');
      }
      if (!this.productPattern.trim() && attributes.pattern?.length) {
        this.productPattern = attributes.pattern.join(', ');
      }
      if (!this.productDesign.trim() && attributes.design_elements?.length) {
        this.productDesign = attributes.design_elements.join(', ');
      }
      if (!this.productEmbellishments.trim() && attributes.embellishments?.length) {
        this.productEmbellishments = attributes.embellishments.join(', ');
      }
      if (!this.productCraftType.trim() && attributes.craft_type?.length) {
        this.productCraftType = attributes.craft_type.join(', ');
      }
      if (!this.productTexture.trim() && attributes.texture) {
        this.productTexture = attributes.texture;
      }
      if (!this.productVisualDensity.trim() && attributes.visual_density) {
        this.productVisualDensity = attributes.visual_density;
      }
      if (!this.productShape.trim() && attributes.shape) {
        this.productShape = attributes.shape;
      }
      if (!this.productUsage.trim() && attributes.usage?.length) {
        this.productUsage = attributes.usage.join(', ');
      }
      if (!this.productAestheticTags.trim() && attributes.aesthetic_tags?.length) {
        this.productAestheticTags = attributes.aesthetic_tags.join(', ');
      }
      if (!this.productCulturalInference.trim() && attributes.cultural_inference) {
        this.productCulturalInference = attributes.cultural_inference;
      }
      if (!this.productQualityInference.trim() && attributes.quality_inference) {
        this.productQualityInference = attributes.quality_inference;
      }
    }
    getAdminIdFromSession() {
      try {
        const raw = localStorage.getItem('admin_user');
        if (!raw) {
          return null;
        }
        const parsed = JSON.parse(raw);
        const numericId = Number(parsed?.id);
        return Number.isInteger(numericId) && numericId > 0 ? numericId : null;
      } catch {
        return null;
      }
    }
    get selectedCurrency() {
      return this.currencyPreferenceService.getCurrency();
    }
    static {
      this.ɵfac = function AdminComponent_Factory(t) {
        return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_currency_preference_service__WEBPACK_IMPORTED_MODULE_1__.CurrencyPreferenceService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["app-admin"]],
        decls: 194,
        vars: 55,
        consts: [[1, "admin-products-page"], [1, "admin-header-bar"], [1, "card", "upload-card"], [1, "card-title-row"], ["class", "btn-cancel", "type", "button", 3, "click", 4, "ngIf"], [1, "ai-mode-panel"], [1, "ai-mode-title"], [1, "ai-mode-subtitle"], [1, "ai-mode-source"], [1, "ai-mode-actions"], [3, "ngModel", "disabled", "ngModelChange"], ["value", "async"], ["value", "sync"], ["value", "off"], ["type", "button", 1, "btn-ai-mode", 3, "disabled", "click"], [1, "form-grid"], ["type", "text", "placeholder", "e.g. Floral Embroidered Kurta", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "1", "placeholder", "e.g. 1499", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "e.g. bangle set", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. silk thread bangles", 3, "ngModel", "ngModelChange"], ["class", "full-width", 4, "ngIf"], ["type", "text", "placeholder", "e.g. red", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. gold, maroon", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. warm, festive", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. 2.4", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. kundan, floral motifs", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. floral", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. ethnic", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. alloy, silk thread", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. glossy, matte", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. wedding, festive", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. stones, beads, zari", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. handcrafted, threadwork", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. smooth, textured", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. rich, minimal", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. round", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. bridal wear, gifting", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. ethnic, premium, modern", 3, "ngModel", "ngModelChange"], [1, "full-width"], ["rows", "2", "placeholder", "e.g. Indian festive styling", 3, "ngModel", "ngModelChange"], ["rows", "2", "placeholder", "e.g. premium handcrafted finish", 3, "ngModel", "ngModelChange"], [1, "description-label-row"], ["value", "openai"], ["value", "gemini"], ["type", "button", 1, "btn-generate-description", 3, "disabled", "click"], [1, "description-editor-shell"], [1, "description-toolbar"], ["type", "button", 1, "toolbar-btn", 3, "click"], ["contenteditable", "true", 1, "description-editor", 3, "innerHTML", "input"], [1, "description-help"], ["type", "text", "placeholder", "Search-friendly title for this product", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. bridal, festive, kundan, ethnic", 3, "ngModel", "ngModelChange"], ["rows", "3", "placeholder", "Short search result summary for SEO", 3, "ngModel", "ngModelChange"], [1, "full-width", "file-picker-section"], [1, "file-picker-label"], [1, "file-pick-btn"], ["type", "file", "accept", "image/png,image/jpeg", "multiple", "", 3, "change"], ["class", "images-grid", 4, "ngIf"], ["type", "button", 1, "btn-upload", 3, "disabled", "click"], [4, "ngIf"], ["class", "message success", 4, "ngIf"], ["class", "message error", 4, "ngIf"], ["class", "message", 3, "success", "error", "info", 4, "ngIf"], [1, "card", "list-card"], [1, "list-header"], ["class", "empty-text", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], ["type", "button", 1, "btn-cancel", 3, "click"], [1, "images-grid"], [1, "images-section-title"], ["class", "image-thumb-card existing", 4, "ngFor", "ngForOf"], [1, "image-thumb-card", "existing"], [3, "src", "alt"], ["class", "primary-badge", 4, "ngIf"], [1, "primary-badge"], ["class", "image-thumb-card", 3, "is-primary", 4, "ngFor", "ngForOf"], [1, "image-thumb-card"], ["type", "button", "title", "Remove", 1, "btn-remove-image", 3, "click"], [1, "img-filename"], ["type", "button", 1, "btn-set-primary", 3, "click"], [1, "message", "success"], [1, "message", "error"], [1, "message"], [1, "empty-text"], [1, "table-wrap"], [3, "editing-row", 4, "ngFor", "ngForOf"], [1, "actions-cell"], [1, "btn-edit", 3, "click"], [1, "btn-delete", 3, "click"], [1, "confirm-text"], [1, "btn-confirm-yes", 3, "click"], [1, "btn-confirm-no", 3, "click"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Admin Product Panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Currency preference is controlled from the top header and product prices are stored in USD.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AdminComponent_button_11_Template, 2, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5)(13, "div")(14, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "AI Indexing");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Current: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9)(23, "select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_23_listener($event) {
              return ctx.selectedAiMode = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Async");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Sync");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Off");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_30_listener() {
              return ctx.updateAiIndexingMode();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 15)(33, "label")(34, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Product Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_36_listener($event) {
              return ctx.productName = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label")(38, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_40_listener($event) {
              return ctx.productPrice = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label")(42, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_44_listener($event) {
              return ctx.productCategoryId = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "-- Choose category --");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, AdminComponent_option_47_Template, 2, 2, "option", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label")(49, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Product Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_51_listener($event) {
              return ctx.productType = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label")(53, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Sub Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_55_listener($event) {
              return ctx.productSubCategory = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, AdminComponent_p_56_Template, 5, 4, "p", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label")(58, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Primary Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_60_listener($event) {
              return ctx.productPrimaryColor = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "label")(62, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Secondary Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_64_listener($event) {
              return ctx.productColor = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "label")(66, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Color Family");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_68_listener($event) {
              return ctx.productColorFamily = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "label")(70, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Size");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_72_listener($event) {
              return ctx.productSize = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "label")(74, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Design Elements");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_76_listener($event) {
              return ctx.productDesign = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "label")(78, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Pattern");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_80_listener($event) {
              return ctx.productPattern = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "label")(82, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Style");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_84_listener($event) {
              return ctx.productStyle = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "label")(86, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Material Estimated");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_88_listener($event) {
              return ctx.productMaterial = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "label")(90, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Finish");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_92_listener($event) {
              return ctx.productFinish = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "label")(94, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Occasion");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_96_listener($event) {
              return ctx.productOccasion = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "label")(98, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Embellishments");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_100_listener($event) {
              return ctx.productEmbellishments = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "label")(102, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Craft Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_104_listener($event) {
              return ctx.productCraftType = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "label")(106, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Texture");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_108_listener($event) {
              return ctx.productTexture = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "label")(110, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Visual Density");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_112_listener($event) {
              return ctx.productVisualDensity = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "label")(114, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Shape");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_116_listener($event) {
              return ctx.productShape = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "label")(118, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Usage");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_120_listener($event) {
              return ctx.productUsage = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "label")(122, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Aesthetic Tags");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "input", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_124_listener($event) {
              return ctx.productAestheticTags = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "label", 41)(126, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Cultural Inference");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "textarea", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_textarea_ngModelChange_128_listener($event) {
              return ctx.productCulturalInference = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "label", 41)(130, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Quality Inference");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "textarea", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_textarea_ngModelChange_132_listener($event) {
              return ctx.productQualityInference = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "label", 41)(134, "div", 44)(135, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_137_listener($event) {
              return ctx.selectedAiProvider = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "option", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "OpenAI");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "option", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Gemini");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "button", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_142_listener() {
              return ctx.generateDescription();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 48)(145, "div", 49)(146, "button", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_146_listener() {
              return ctx.formatDescription("bold");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "B");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "button", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_149_listener() {
              return ctx.formatDescription("italic");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "em");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "I");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "button", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_152_listener() {
              return ctx.formatDescription("insertUnorderedList");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "\u2022 List");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "button", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_154_listener() {
              return ctx.formatDescription("insertOrderedList");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "1. List");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "button", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_156_listener() {
              return ctx.clearDescriptionFormatting();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Clear");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AdminComponent_Template_div_input_158_listener($event) {
              return ctx.onDescriptionEditorInput($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "small", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Upload at least one image first \u2014 AI uses the selected primary image to generate the title, description, tags, and SEO text.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "label")(162, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "SEO Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "input", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_164_listener($event) {
              return ctx.productSeoTitle = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "label")(166, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "Tags / Keywords");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "input", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_168_listener($event) {
              return ctx.productTags = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "label", 41)(170, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "SEO Meta Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "textarea", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_textarea_ngModelChange_172_listener($event) {
              return ctx.productSeoMetaDescription = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 56)(174, "span", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "Product Images (JPG/PNG \u2014 select one or more)");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "label", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, " Choose Images ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "input", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_178_listener($event) {
              return ctx.onImagesSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](179, AdminComponent_div_179_Template, 4, 1, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](180, AdminComponent_div_180_Template, 4, 1, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "button", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_181_listener() {
              return ctx.saveProduct();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](182, AdminComponent_ng_container_182_Template, 2, 1, "ng-container", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](183, AdminComponent_ng_container_183_Template, 2, 1, "ng-container", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](184, AdminComponent_p_184_Template, 2, 1, "p", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](185, AdminComponent_p_185_Template, 2, 1, "p", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](186, AdminComponent_p_186_Template, 2, 7, "p", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 66)(188, "div", 67)(189, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "Uploaded Products");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](191, AdminComponent_span_191_Template, 2, 0, "span", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](192, AdminComponent_p_192_Template, 2, 0, "p", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](193, AdminComponent_div_193_Template, 18, 1, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.editMode ? "Edit Product #" + ctx.editingProductId : "Upload New Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeAiMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.aiModeSource, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedAiMode)("disabled", ctx.isUpdatingAiMode || ctx.isSubmitting);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isUpdatingAiMode || ctx.isSubmitting || ctx.selectedAiMode === ctx.activeAiMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isUpdatingAiMode ? "Saving..." : "Apply Mode", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productName);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productPrice);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productCategoryId);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productCategories);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productType);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productSubCategory);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pricePreviewInUsd !== null);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productPrimaryColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productColorFamily);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productSize);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productDesign);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productPattern);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productStyle);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productMaterial);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productFinish);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productOccasion);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productEmbellishments);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productCraftType);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productTexture);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productVisualDensity);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productShape);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productUsage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productAestheticTags);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productCulturalInference);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productQualityInference);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedAiProvider)("disabled", ctx.isGeneratingDescription || ctx.isSubmitting);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isGeneratingDescription || ctx.isSubmitting || ctx.selectedImages.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isGeneratingDescription ? "Generating..." : "\u2728 Generate AI Content", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.productDescription, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-placeholder", "Short product details for admin reference or click AI Generate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productSeoTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productTags);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.productSeoMetaDescription);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editMode && ctx.editExistingImages.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedImages.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isSubmitting);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isSubmitting);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.aiIndexingMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoadingProducts);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoadingProducts && ctx.products.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _shared_pipes_display_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.DisplayCurrencyPipe],
        styles: ["@charset \"UTF-8\";\n.admin-products-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 32px 16px 48px;\n  display: grid;\n  gap: 20px;\n}\n\n.admin-header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 16px;\n}\n.admin-header-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.admin-header-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #475569;\n  font-size: 0.92rem;\n}\n\n.admin-currency-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 210px;\n}\n.admin-currency-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.admin-currency-control[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.8rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);\n}\n\n.list-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #0f172a;\n}\n\n.category-settings__hint[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #475569;\n  font-size: 0.92rem;\n}\n\n.category-settings__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.category-count-field[_ngcontent-%COMP%] {\n  max-width: 320px;\n}\n\n.category-settings__list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.category-settings__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr 1fr;\n  gap: 14px;\n  padding: 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: #f8fafc;\n  align-items: start;\n}\n\n.category-settings__preview[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.category-settings__preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 88px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n}\n.category-settings__preview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.78rem;\n}\n\n.btn-save-categories[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.description-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n\n.btn-generate-description[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.btn-generate-description[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.description-help[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 0.8rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], .description-editor[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.95rem;\n  font-family: inherit;\n  color: #0f172a;\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, .description-editor[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);\n}\n\n.description-editor-shell[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n\n.description-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n\n.toolbar-btn[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 6px 10px;\n  background: #fff;\n  color: #0f172a;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.toolbar-btn[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  border-color: #93c5fd;\n}\n\n.description-editor[_ngcontent-%COMP%] {\n  min-height: 150px;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n  line-height: 1.6;\n  white-space: normal;\n}\n\n.description-editor[_ngcontent-%COMP%]:empty::before {\n  content: attr(data-placeholder);\n  color: #94a3b8;\n}\n\n.description-editor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .description-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .description-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n}\n\n.description-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .description-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\n\n\n.file-picker-section[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.file-picker-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.file-pick-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  background: #f1f5f9;\n  border: 1.5px dashed #94a3b8;\n  border-radius: 10px;\n  padding: 10px 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #334155;\n  align-self: flex-start;\n  transition: background 0.15s;\n}\n.file-pick-btn[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.file-pick-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n\n.images-section-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.images-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.image-thumb-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 8px;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  background: #f8fafc;\n  width: 130px;\n  transition: border-color 0.15s;\n}\n.image-thumb-card.is-primary[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.image-thumb-card.existing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.image-thumb-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  object-fit: cover;\n  border-radius: 7px;\n  border: 1px solid #cbd5e1;\n}\n\n.img-filename[_ngcontent-%COMP%] {\n  max-width: 110px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.72rem;\n  color: #64748b;\n}\n\n.btn-remove-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: #dc2626;\n  color: #fff;\n  border: 0;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  font-size: 0.72rem;\n  cursor: pointer;\n  line-height: 20px;\n  text-align: center;\n  padding: 0;\n}\n\n.btn-set-primary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #1e293b;\n  border: 0;\n  border-radius: 6px;\n  padding: 3px 8px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-set-primary.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-set-primary[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #cbd5e1;\n}\n\n.primary-badge[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-radius: 6px;\n  padding: 2px 8px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n\n.btn-upload[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  background: #0f172a;\n  color: #fff;\n  border: 0;\n  border-radius: 10px;\n  padding: 10px 18px;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.btn-upload[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #475569;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 6px 14px;\n  cursor: pointer;\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n\n.card-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n\n.card-title-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n\n.ai-mode-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 16px;\n  margin-bottom: 16px;\n  border: 1px solid #dbeafe;\n  border-radius: 12px;\n  background: #f8fbff;\n}\n\n.ai-mode-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.ai-mode-subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.85rem;\n  color: #475569;\n}\n\n.ai-mode-source[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.72rem;\n  letter-spacing: 0.04em;\n}\n\n.ai-mode-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.ai-mode-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 120px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.92rem;\n  color: #0f172a;\n  background: #fff;\n}\n\n.btn-ai-mode[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: 0;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.btn-ai-mode[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 0.95rem;\n}\n\n.message.success[_ngcontent-%COMP%] {\n  color: #166534;\n}\n\n.message.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n\n.message.info[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.list-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.9rem;\n}\n\n.empty-text[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 12px 8px;\n  font-size: 0.92rem;\n  color: #1e293b;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: #64748b;\n}\n\ntd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 8px;\n  object-fit: cover;\n  border: 1px solid #cbd5e1;\n}\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n  min-width: 160px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n  border: 1px solid #bae6fd;\n  border-radius: 7px;\n  padding: 5px 12px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #bae6fd;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 7px;\n  padding: 5px 12px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #b91c1c;\n}\n\n.btn-confirm-yes[_ngcontent-%COMP%] {\n  background: #b91c1c;\n  color: #fff;\n  border: 0;\n  border-radius: 7px;\n  padding: 5px 10px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n\n.btn-confirm-no[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #1e293b;\n  border: 0;\n  border-radius: 7px;\n  padding: 5px 10px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n\n.editing-row[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n}\n\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 760px) {\n  .admin-header-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .admin-currency-control[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .ai-mode-panel[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .ai-mode-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .category-settings__top[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .category-settings__row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .category-settings__preview[_ngcontent-%COMP%] {\n    max-width: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUVEOztBQUNBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBRUQ7QUFBQztFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFRjtBQUNDO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBQUQ7QUFFQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQztFQUNDLGNBQUE7RUFDQSxpQkFBQTtBQURGOztBQUtBO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FBRkQ7O0FBS0E7RUFDQyxnQkFBQTtFQUNBLGNBQUE7QUFGRDs7QUFLQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRkQ7O0FBS0E7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFGRDs7QUFLQTtFQUNDLGdCQUFBO0FBRkQ7O0FBS0E7RUFDQyxhQUFBO0VBQ0EsU0FBQTtBQUZEOztBQUtBO0VBQ0MsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZEOztBQUtBO0VBQ0MsYUFBQTtFQUNBLFFBQUE7QUFGRDtBQUlDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFGRjtBQUtDO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0FBSEY7O0FBT0E7RUFDQyxhQUFBO0FBSkQ7O0FBT0E7RUFDQyxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0FBSkQ7O0FBT0E7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBSkQ7O0FBT0E7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUpEOztBQU9BO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFKRDs7QUFPQTtFQUNDLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkRBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUpEOztBQU9BO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0FBSkQ7O0FBT0E7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKRDs7QUFPQTs7OztFQUlDLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBSkQ7O0FBT0E7Ozs7RUFJQyxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBQUpEOztBQU9BO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKRDs7QUFPQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBSkQ7O0FBT0E7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpEOztBQU9BO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQUpEOztBQU9BO0VBQ0MsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKRDs7QUFPQTtFQUNDLCtCQUFBO0VBQ0EsY0FBQTtBQUpEOztBQU9BOzs7RUFHQyxtQkFBQTtBQUpEOztBQU9BOztFQUVDLHFCQUFBO0FBSkQ7O0FBT0E7RUFDQyxpQkFBQTtBQUpEOztBQU9BLHNEQUFBO0FBQ0E7RUFDQyxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFKRDs7QUFPQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSkQ7O0FBT0E7RUFDQyxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUpEO0FBTUM7RUFDQyxhQUFBO0FBSkY7QUFPQztFQUNDLG1CQUFBO0FBTEY7O0FBU0E7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBTkQ7O0FBU0E7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFORDs7QUFTQTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQU5EO0FBUUM7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0FBTkY7QUFTQztFQUNDLFlBQUE7QUFQRjtBQVVDO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFSRjs7QUFZQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVEQ7O0FBWUE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVREOztBQVlBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVEQ7QUFXQztFQUNDLG1CQUFBO0VBQ0EsV0FBQTtBQVRGO0FBWUM7RUFDQyxtQkFBQTtBQVZGOztBQWNBO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFYRDs7QUFjQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFYRDs7QUFjQTtFQUNDLFlBQUE7RUFDQSxtQkFBQTtBQVhEOztBQWNBO0VBQ0MsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFYRDs7QUFjQTtFQUNDLG1CQUFBO0FBWEQ7O0FBY0E7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBWEQ7O0FBY0E7RUFDQyxTQUFBO0VBQ0EsY0FBQTtBQVhEOztBQWNBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVhEOztBQWNBO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWEQ7O0FBY0E7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBWEQ7O0FBY0E7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFYRDs7QUFjQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFYRDs7QUFjQTtFQUNDLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFYRDs7QUFjQTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFYRDs7QUFjQTtFQUNDLFlBQUE7RUFDQSxtQkFBQTtBQVhEOztBQWNBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQVhEOztBQWNBO0VBQ0MsY0FBQTtBQVhEOztBQWNBO0VBQ0MsY0FBQTtBQVhEOztBQWNBO0VBQ0MsY0FBQTtBQVhEOztBQWNBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVhEOztBQWNBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0FBWEQ7O0FBY0E7RUFDQyxjQUFBO0FBWEQ7O0FBY0E7RUFDQyxnQkFBQTtBQVhEOztBQWNBO0VBQ0MsV0FBQTtFQUNBLHlCQUFBO0FBWEQ7O0FBY0E7O0VBRUMsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBWEQ7O0FBY0E7RUFDQyxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBWEQ7O0FBY0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQVhEOztBQWNBO0VBQ0MsYUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVhEOztBQWNBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFYRDs7QUFjQTtFQUNDLG1CQUFBO0FBWEQ7O0FBY0E7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVhEOztBQWNBO0VBQ0MsbUJBQUE7QUFYRDs7QUFjQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWEQ7O0FBY0E7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWEQ7O0FBY0E7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWEQ7O0FBY0E7RUFDQyxtQkFBQTtBQVhEOztBQWNBO0VBQ0MsU0FBQTtBQVhEOztBQWNBO0VBQ0M7SUFDQyxzQkFBQTtJQUNBLG9CQUFBO0VBWEE7RUFjRDtJQUNDLFlBQUE7RUFaQTtFQWVEO0lBQ0Msc0JBQUE7SUFDQSxvQkFBQTtFQWJBO0VBZ0JEO0lBQ0Msc0JBQUE7SUFDQSxvQkFBQTtFQWRBO0VBaUJEO0lBQ0MsMEJBQUE7RUFmQTtFQWtCRDtJQUNDLHNCQUFBO0VBaEJBO0VBbUJEO0lBQ0MsMEJBQUE7RUFqQkE7RUFvQkQ7SUFDQyxnQkFBQTtFQWxCQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLXByb2R1Y3RzLXBhZ2Uge1xuXHRtYXgtd2lkdGg6IDExMDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDMycHggMTZweCA0OHB4O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6IDIwcHg7XG59XG5cbi5hZG1pbi1oZWFkZXItYmFyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdGdhcDogMTZweDtcblxuXHRoMSB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdGNvbG9yOiAjMGYxNzJhO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiA2cHggMCAwO1xuXHRcdGNvbG9yOiAjNDc1NTY5O1xuXHRcdGZvbnQtc2l6ZTogMC45MnJlbTtcblx0fVxufVxuXG4uYWRtaW4tY3VycmVuY3ktY29udHJvbCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogNnB4O1xuXHRtaW4td2lkdGg6IDIxMHB4O1xuXG5cdGxhYmVsIHtcblx0XHRmb250LXNpemU6IDAuODVyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRjb2xvcjogIzFlMjkzYjtcblx0fVxuXG5cdHNtYWxsIHtcblx0XHRjb2xvcjogIzY0NzQ4Yjtcblx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0fVxufVxuXG4uY2FyZCB7XG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcbn1cblxuLmxpc3QtY2FyZCBoMiB7XG5cdG1hcmdpbjogMCAwIDE0cHg7XG5cdGNvbG9yOiAjMGYxNzJhO1xufVxuXG4uY2F0ZWdvcnktc2V0dGluZ3NfX2hpbnQge1xuXHRtYXJnaW46IDAgMCAxNnB4O1xuXHRjb2xvcjogIzQ3NTU2OTtcblx0Zm9udC1zaXplOiAwLjkycmVtO1xufVxuXG4uY2F0ZWdvcnktc2V0dGluZ3NfX3RvcCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Z2FwOiAxNnB4O1xuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY2F0ZWdvcnktY291bnQtZmllbGQge1xuXHRtYXgtd2lkdGg6IDMyMHB4O1xufVxuXG4uY2F0ZWdvcnktc2V0dGluZ3NfX2xpc3Qge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6IDE0cHg7XG59XG5cbi5jYXRlZ29yeS1zZXR0aW5nc19fcm93IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAxZnIgMWZyO1xuXHRnYXA6IDE0cHg7XG5cdHBhZGRpbmc6IDE0cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG5cdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdGJhY2tncm91bmQ6ICNmOGZhZmM7XG5cdGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmNhdGVnb3J5LXNldHRpbmdzX19wcmV2aWV3IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z2FwOiA4cHg7XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDg4cHg7XG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuXHR9XG5cblx0c21hbGwge1xuXHRcdGNvbG9yOiAjNjQ3NDhiO1xuXHRcdGZvbnQtc2l6ZTogMC43OHJlbTtcblx0fVxufVxuXG4uYnRuLXNhdmUtY2F0ZWdvcmllcyB7XG5cdG1hcmdpbi10b3A6IDA7XG59XG5cbi5mb3JtLWdyaWQge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG5cdGdhcDogMTRweDtcbn1cblxubGFiZWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDZweDtcbn1cblxubGFiZWwgc3BhbiB7XG5cdGZvbnQtc2l6ZTogMC45cmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjogIzFlMjkzYjtcbn1cblxuLmRlc2NyaXB0aW9uLWxhYmVsLXJvdyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Z2FwOiAxMnB4O1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5idG4tZ2VuZXJhdGUtZGVzY3JpcHRpb24ge1xuXHRib3JkZXI6IDA7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0cGFkZGluZzogOHB4IDEycHg7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQgMCUsICMyNTYzZWIgMTAwJSk7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXNpemU6IDAuODVyZW07XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJ0bi1nZW5lcmF0ZS1kZXNjcmlwdGlvbjpkaXNhYmxlZCB7XG5cdG9wYWNpdHk6IDAuNjtcblx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmRlc2NyaXB0aW9uLWhlbHAge1xuXHRtYXJnaW4tdG9wOiA2cHg7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRjb2xvcjogIzY0NzQ4Yjtcblx0bGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSxcbi5kZXNjcmlwdGlvbi1lZGl0b3Ige1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRwYWRkaW5nOiAxMHB4IDEycHg7XG5cdGZvbnQtc2l6ZTogMC45NXJlbTtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdGNvbG9yOiAjMGYxNzJhO1xufVxuXG5pbnB1dDpmb2N1cyxcbnNlbGVjdDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuLmRlc2NyaXB0aW9uLWVkaXRvcjpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlci1jb2xvcjogIzI1NjNlYjtcblx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTIpO1xufVxuXG4uZGVzY3JpcHRpb24tZWRpdG9yLXNoZWxsIHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRlc2NyaXB0aW9uLXRvb2xiYXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogOHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcblx0YmFja2dyb3VuZDogI2Y4ZmFmYztcbn1cblxuLnRvb2xiYXItYnRuIHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRwYWRkaW5nOiA2cHggMTBweDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Y29sb3I6ICMwZjE3MmE7XG5cdGZvbnQtc2l6ZTogMC44MnJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9vbGJhci1idG46aG92ZXIge1xuXHRiYWNrZ3JvdW5kOiAjZWZmNmZmO1xuXHRib3JkZXItY29sb3I6ICM5M2M1ZmQ7XG59XG5cbi5kZXNjcmlwdGlvbi1lZGl0b3Ige1xuXHRtaW4taGVpZ2h0OiAxNTBweDtcblx0Ym9yZGVyOiAwO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRsaW5lLWhlaWdodDogMS42O1xuXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uZGVzY3JpcHRpb24tZWRpdG9yOmVtcHR5OjpiZWZvcmUge1xuXHRjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuXHRjb2xvcjogIzk0YTNiODtcbn1cblxuLmRlc2NyaXB0aW9uLWVkaXRvciBwLFxuLmRlc2NyaXB0aW9uLWVkaXRvciB1bCxcbi5kZXNjcmlwdGlvbi1lZGl0b3Igb2wge1xuXHRtYXJnaW46IDAgMCAwLjc1cmVtO1xufVxuXG4uZGVzY3JpcHRpb24tZWRpdG9yIHVsLFxuLmRlc2NyaXB0aW9uLWVkaXRvciBvbCB7XG5cdHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuXHRncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG4vKiDDosKUwoDDosKUwoAgTXVsdGktaW1hZ2UgcGlja2VyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmZpbGUtcGlja2VyLXNlY3Rpb24ge1xuXHRncmlkLWNvbHVtbjogMSAvIC0xO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDEycHg7XG59XG5cbi5maWxlLXBpY2tlci1sYWJlbCB7XG5cdGZvbnQtc2l6ZTogMC45cmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjogIzFlMjkzYjtcbn1cblxuLmZpbGUtcGljay1idG4ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZDogI2YxZjVmOTtcblx0Ym9yZGVyOiAxLjVweCBkYXNoZWQgIzk0YTNiODtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMTBweCAyMHB4O1xuXHRmb250LXNpemU6IDAuOXJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Y29sb3I6ICMzMzQxNTU7XG5cdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG5cblx0aW5wdXRbdHlwZT0nZmlsZSddIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogI2UyZThmMDtcblx0fVxufVxuXG4uaW1hZ2VzLXNlY3Rpb24tdGl0bGUge1xuXHRtYXJnaW46IDAgMCA0cHg7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjogIzY0NzQ4Yjtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbn1cblxuLmltYWdlcy1ncmlkIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDEycHg7XG59XG5cbi5pbWFnZS10aHVtYi1jYXJkIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDZweDtcblx0cGFkZGluZzogOHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjZTJlOGYwO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuXHR3aWR0aDogMTMwcHg7XG5cdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cztcblxuXHQmLmlzLXByaW1hcnkge1xuXHRcdGJvcmRlci1jb2xvcjogIzI1NjNlYjtcblx0XHRiYWNrZ3JvdW5kOiAjZWZmNmZmO1xuXHR9XG5cblx0Ji5leGlzdGluZyB7XG5cdFx0b3BhY2l0eTogMC42O1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTEwcHg7XG5cdFx0aGVpZ2h0OiAxMTBweDtcblx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcblx0fVxufVxuXG4uaW1nLWZpbGVuYW1lIHtcblx0bWF4LXdpZHRoOiAxMTBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdGZvbnQtc2l6ZTogMC43MnJlbTtcblx0Y29sb3I6ICM2NDc0OGI7XG59XG5cbi5idG4tcmVtb3ZlLWltYWdlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDRweDtcblx0cmlnaHQ6IDRweDtcblx0YmFja2dyb3VuZDogI2RjMjYyNjtcblx0Y29sb3I6ICNmZmY7XG5cdGJvcmRlcjogMDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRmb250LXNpemU6IDAuNzJyZW07XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzogMDtcbn1cblxuLmJ0bi1zZXQtcHJpbWFyeSB7XG5cdGJhY2tncm91bmQ6ICNlMmU4ZjA7XG5cdGNvbG9yOiAjMWUyOTNiO1xuXHRib3JkZXI6IDA7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcblx0cGFkZGluZzogM3B4IDhweDtcblx0Zm9udC1zaXplOiAwLjc0cmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblx0Ji5hY3RpdmUge1xuXHRcdGJhY2tncm91bmQ6ICMyNTYzZWI7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblxuXHQmOmhvdmVyOm5vdCguYWN0aXZlKSB7XG5cdFx0YmFja2dyb3VuZDogI2NiZDVlMTtcblx0fVxufVxuXG4ucHJpbWFyeS1iYWRnZSB7XG5cdGJhY2tncm91bmQ6ICMyNTYzZWI7XG5cdGNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdHBhZGRpbmc6IDJweCA4cHg7XG5cdGZvbnQtc2l6ZTogMC43MnJlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ0bi11cGxvYWQge1xuXHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRiYWNrZ3JvdW5kOiAjMGYxNzJhO1xuXHRjb2xvcjogI2ZmZjtcblx0Ym9yZGVyOiAwO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRwYWRkaW5nOiAxMHB4IDE4cHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bi11cGxvYWQ6ZGlzYWJsZWQge1xuXHRvcGFjaXR5OiAwLjY7XG5cdGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG4tY2FuY2VsIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiAjNDc1NTY5O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdHBhZGRpbmc6IDZweCAxNHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMC44OHJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuXHRiYWNrZ3JvdW5kOiAjZjFmNWY5O1xufVxuXG4uY2FyZC10aXRsZS1yb3cge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5jYXJkLXRpdGxlLXJvdyBoMiB7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6ICMwZjE3MmE7XG59XG5cbi5haS1tb2RlLXBhbmVsIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDE2cHg7XG5cdHBhZGRpbmc6IDE0cHggMTZweDtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RiZWFmZTtcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0YmFja2dyb3VuZDogI2Y4ZmJmZjtcbn1cblxuLmFpLW1vZGUtdGl0bGUge1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtc2l6ZTogMC45NXJlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6ICMwZjE3MmE7XG59XG5cbi5haS1tb2RlLXN1YnRpdGxlIHtcblx0bWFyZ2luOiA0cHggMCAwO1xuXHRmb250LXNpemU6IDAuODVyZW07XG5cdGNvbG9yOiAjNDc1NTY5O1xufVxuXG4uYWktbW9kZS1zb3VyY2Uge1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXNpemU6IDAuNzJyZW07XG5cdGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG59XG5cbi5haS1tb2RlLWFjdGlvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDEwcHg7XG59XG5cbi5haS1tb2RlLWFjdGlvbnMgc2VsZWN0IHtcblx0bWluLXdpZHRoOiAxMjBweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMTBweCAxMnB4O1xuXHRmb250LXNpemU6IDAuOTJyZW07XG5cdGNvbG9yOiAjMGYxNzJhO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYnRuLWFpLW1vZGUge1xuXHRiYWNrZ3JvdW5kOiAjMjU2M2ViO1xuXHRjb2xvcjogI2ZmZjtcblx0Ym9yZGVyOiAwO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRwYWRkaW5nOiAxMHB4IDE0cHg7XG5cdGZvbnQtc2l6ZTogMC44OHJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWFpLW1vZGU6ZGlzYWJsZWQge1xuXHRvcGFjaXR5OiAwLjY7XG5cdGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5tZXNzYWdlIHtcblx0bWFyZ2luLXRvcDogMTJweDtcblx0Zm9udC1zaXplOiAwLjk1cmVtO1xufVxuXG4ubWVzc2FnZS5zdWNjZXNzIHtcblx0Y29sb3I6ICMxNjY1MzQ7XG59XG5cbi5tZXNzYWdlLmVycm9yIHtcblx0Y29sb3I6ICNiOTFjMWM7XG59XG5cbi5tZXNzYWdlLmluZm8ge1xuXHRjb2xvcjogIzFkNGVkODtcbn1cblxuLmxpc3QtaGVhZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGlzdC1oZWFkZXIgc3BhbiB7XG5cdGNvbG9yOiAjNDc1NTY5O1xuXHRmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmVtcHR5LXRleHQge1xuXHRjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLnRhYmxlLXdyYXAge1xuXHRvdmVyZmxvdy14OiBhdXRvO1xufVxuXG50YWJsZSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50aCxcbnRkIHtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XG5cdHBhZGRpbmc6IDEycHggOHB4O1xuXHRmb250LXNpemU6IDAuOTJyZW07XG5cdGNvbG9yOiAjMWUyOTNiO1xufVxuXG50aCB7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuXHRjb2xvcjogIzY0NzQ4Yjtcbn1cblxudGQgaW1nIHtcblx0d2lkdGg6IDU0cHg7XG5cdGhlaWdodDogNTRweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbn1cblxuLmFjdGlvbnMtY2VsbCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogNnB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1pbi13aWR0aDogMTYwcHg7XG59XG5cbi5idG4tZWRpdCB7XG5cdGJhY2tncm91bmQ6ICNlMGYyZmU7XG5cdGNvbG9yOiAjMDM2OWExO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjYmFlNmZkO1xuXHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdHBhZGRpbmc6IDVweCAxMnB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMC44MnJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bi1lZGl0OmhvdmVyIHtcblx0YmFja2dyb3VuZDogI2JhZTZmZDtcbn1cblxuLmJ0bi1kZWxldGUge1xuXHRiYWNrZ3JvdW5kOiAjZmVlMmUyO1xuXHRjb2xvcjogI2I5MWMxYztcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRwYWRkaW5nOiA1cHggMTJweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRmb250LXNpemU6IDAuODJyZW07XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG4tZGVsZXRlOmhvdmVyIHtcblx0YmFja2dyb3VuZDogI2ZlY2FjYTtcbn1cblxuLmNvbmZpcm0tdGV4dCB7XG5cdGZvbnQtc2l6ZTogMC44MnJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Y29sb3I6ICNiOTFjMWM7XG59XG5cbi5idG4tY29uZmlybS15ZXMge1xuXHRiYWNrZ3JvdW5kOiAjYjkxYzFjO1xuXHRjb2xvcjogI2ZmZjtcblx0Ym9yZGVyOiAwO1xuXHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMC44MnJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bi1jb25maXJtLW5vIHtcblx0YmFja2dyb3VuZDogI2UyZThmMDtcblx0Y29sb3I6ICMxZTI5M2I7XG5cdGJvcmRlcjogMDtcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRwYWRkaW5nOiA1cHggMTBweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRmb250LXNpemU6IDAuODJyZW07XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5lZGl0aW5nLXJvdyB7XG5cdGJhY2tncm91bmQ6ICNmMGY5ZmY7XG59XG5cbi5saXN0LWhlYWRlciBoMiB7XG5cdG1hcmdpbjogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG5cdC5hZG1pbi1oZWFkZXItYmFyIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHR9XG5cblx0LmFkbWluLWN1cnJlbmN5LWNvbnRyb2wge1xuXHRcdG1pbi13aWR0aDogMDtcblx0fVxuXG5cdC5haS1tb2RlLXBhbmVsIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHR9XG5cblx0LmFpLW1vZGUtYWN0aW9ucyB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0fVxuXG5cdC5mb3JtLWdyaWQge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHR9XG5cblx0LmNhdGVnb3J5LXNldHRpbmdzX190b3Age1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblxuXHQuY2F0ZWdvcnktc2V0dGluZ3NfX3JvdyB7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdH1cblxuXHQuY2F0ZWdvcnktc2V0dGluZ3NfX3ByZXZpZXcge1xuXHRcdG1heC13aWR0aDogMTgwcHg7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return AdminComponent;
})();

/***/ }),

/***/ 4911:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 1574);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ 4976);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ 4714);
/* harmony import */ var _layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/admin-layout.component */ 5108);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ 5064);
/* harmony import */ var _slider_settings_slider_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider-settings/slider-settings.component */ 3388);
/* harmony import */ var _home_category_control_home_category_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-category-control/home-category-control.component */ 744);
/* harmony import */ var _queue_monitor_queue_monitor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queue-monitor/queue-monitor.component */ 1748);
/* harmony import */ var _currency_settings_currency_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./currency-settings/currency-settings.component */ 7487);
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviews/reviews.component */ 2764);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ 628);
/* harmony import */ var _admin_banner_management_admin_banner_management_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-banner-management/admin-banner-management.component */ 8520);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);

















let AdminModule = /*#__PURE__*/(() => {
  class AdminModule {
    static {
      this.ɵfac = function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: AdminModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
      });
    }
  }
  return AdminModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.AdminProductListComponent, _layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__.AdminLayoutComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_4__.UsersComponent, _slider_settings_slider_settings_component__WEBPACK_IMPORTED_MODULE_5__.SliderSettingsComponent, _home_category_control_home_category_control_component__WEBPACK_IMPORTED_MODULE_6__.HomeCategoryControlComponent, _queue_monitor_queue_monitor_component__WEBPACK_IMPORTED_MODULE_7__.QueueMonitorComponent, _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__.ReviewsComponent, _currency_settings_currency_settings_component__WEBPACK_IMPORTED_MODULE_8__.CurrencySettingsComponent, _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__.AdminSettingsComponent, _admin_banner_management_admin_banner_management_component__WEBPACK_IMPORTED_MODULE_11__.AdminBannerManagementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
  });
})();

/***/ }),

/***/ 7487:
/*!************************************************************************!*\
  !*** ./src/app/admin/currency-settings/currency-settings.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrencySettingsComponent: () => (/* binding */ CurrencySettingsComponent)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _shared_services_currency_preference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/currency-preference.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);






function CurrencySettingsComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CurrencySettingsComponent_button_21_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const opt_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.multiplier = opt_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.multiplier === opt_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00D7", opt_r4, "");
  }
}
function CurrencySettingsComponent__svg_svg_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 26)(2, "polyline", 27)(3, "polyline", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CurrencySettingsComponent__svg_svg_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "circle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CurrencySettingsComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx_r3.messageType === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
  }
}
let CurrencySettingsComponent = /*#__PURE__*/(() => {
  class CurrencySettingsComponent {
    constructor(http, currencyService) {
      this.http = http;
      this.currencyService = currencyService;
      this.multiplier = 1;
      this.savedMultiplier = 1;
      this.isSaving = false;
      this.message = '';
      this.messageType = 'success';
      this.multiplierOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.settingsUrl = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/settings/currency-multiplier`;
    }
    ngOnInit() {
      this.loadMultiplier();
    }
    loadMultiplier() {
      this.http.get(this.settingsUrl).subscribe({
        next: res => {
          const val = Number(res?.multiplier);
          this.multiplier = Number.isInteger(val) && val >= 1 && val <= 10 ? val : 1;
          this.savedMultiplier = this.multiplier;
          this.currencyService.setUsdMultiplier(this.multiplier);
        },
        error: () => {
          this.showMessage('Could not load current multiplier.', 'error');
        }
      });
    }
    get previewUsd() {
      return this.currencyService.previewMultiplier(100, this.multiplier, 'USD');
    }
    get previewInr() {
      return this.currencyService.previewMultiplier(100, this.multiplier, 'INR');
    }
    onSave() {
      if (this.isSaving) return;
      const token = this.getAdminToken();
      if (!token) {
        this.showMessage('Admin token not found. Please log in again.', 'error');
        return;
      }
      this.isSaving = true;
      this.message = '';
      this.http.put(this.settingsUrl, {
        multiplier: this.multiplier
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).subscribe({
        next: res => {
          const saved = Number(res?.multiplier);
          this.savedMultiplier = saved;
          this.currencyService.setUsdMultiplier(saved);
          this.isSaving = false;
          this.showMessage(`Multiplier saved as ×${saved}. All USD prices now show ×${saved}.`, 'success');
        },
        error: err => {
          this.isSaving = false;
          this.showMessage(err?.error?.error || 'Could not save multiplier.', 'error');
        }
      });
    }
    showMessage(text, type) {
      this.message = text;
      this.messageType = type;
      setTimeout(() => {
        this.message = '';
      }, 4000);
    }
    getAdminToken() {
      try {
        const directToken = localStorage.getItem('admin_token');
        if (directToken) {
          return directToken;
        }
        const raw = localStorage.getItem('admin_user');
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        const id = Number(parsed?.id);
        return Number.isInteger(id) && id > 0 ? `admin-token-${id}` : null;
      } catch {
        return null;
      }
    }
    static {
      this.ɵfac = function CurrencySettingsComponent_Factory(t) {
        return new (t || CurrencySettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_currency_preference_service__WEBPACK_IMPORTED_MODULE_1__.CurrencyPreferenceService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CurrencySettingsComponent,
        selectors: [["app-currency-settings"]],
        decls: 46,
        vars: 11,
        consts: [[1, "currency-settings-page"], [1, "cs-card"], [1, "cs-card-header"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "24", "height", "24"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "cs-badge"], [1, "cs-description"], [1, "cs-section"], ["for", "usd-multiplier", 1, "cs-label"], [1, "cs-slider-row"], ["id", "usd-multiplier", "type", "range", "min", "1", "max", "10", "step", "1", 1, "cs-slider", 3, "ngModel", "ngModelChange"], [1, "cs-quick-btns"], ["type", "button", "class", "cs-opt-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "cs-value-display"], [1, "cs-preview"], [1, "cs-preview-row"], [1, "cs-preview-item"], [1, "cs-preview-label"], [1, "cs-preview-amount"], [1, "cs-actions"], ["type", "button", 1, "cs-save-btn", 3, "disabled", "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "16", "height", "16", 4, "ngIf"], ["class", "cs-message", 3, "error", 4, "ngIf"], ["type", "button", 1, "cs-opt-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "16", "height", "16"], ["d", "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"], ["points", "17 21 17 13 7 13 7 21"], ["points", "7 3 7 8 15 8"], ["cx", "12", "cy", "12", "r", "10", "stroke-dasharray", "32", "stroke-dashoffset", "8"], [1, "cs-message"]],
        template: function CurrencySettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "svg", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "circle", 4)(5, "path", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Currency Display Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Super Admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Set a multiplier applied to USD prices when shown to customers ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "outside India");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, ". India users always see INR at the fixed conversion rate. This does not affect stored database amounts. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "USD Display Multiplier (1 \u2013 10)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CurrencySettingsComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.multiplier = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CurrencySettingsComponent_button_21_Template, 2, 3, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Selected: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 15)(27, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Live Preview");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16)(30, "div", 17)(31, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 17)(36, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "India (INR, fixed rate)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 20)(41, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CurrencySettingsComponent_Template_button_click_41_listener() {
              return ctx.onSave();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, CurrencySettingsComponent__svg_svg_42_Template, 4, 0, "svg", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CurrencySettingsComponent__svg_svg_43_Template, 2, 0, "svg", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, CurrencySettingsComponent_div_45_Template, 2, 3, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.multiplier);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.multiplierOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00D7", ctx.multiplier, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Outside India (USD \u00D7", ctx.multiplier, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$100 \u2192 ", ctx.previewUsd, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$100 \u2192 ", ctx.previewInr, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isSaving ? "Saving\u2026" : "Save Multiplier", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        styles: [".currency-settings-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 680px;\n}\n\n.cs-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n}\n\n.cs-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.cs-card-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #2563eb;\n  flex-shrink: 0;\n}\n.cs-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n  flex: 1;\n}\n\n.cs-badge[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.cs-description[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 0 0 24px;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border-left: 3px solid #2563eb;\n  border-radius: 0 6px 6px 0;\n}\n\n.cs-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.cs-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.cs-slider-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.cs-slider[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  outline: none;\n  cursor: pointer;\n}\n.cs-slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #2563eb;\n  cursor: pointer;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 2px #2563eb;\n}\n.cs-slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #2563eb;\n  cursor: pointer;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 2px #2563eb;\n}\n\n.cs-quick-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.cs-opt-btn[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 6px;\n  background: #f8fafc;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cs-opt-btn[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n}\n.cs-opt-btn.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #fff;\n}\n\n.cs-value-display[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.88rem;\n  color: #475569;\n}\n.cs-value-display[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 1rem;\n}\n\n.cs-preview[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n.cs-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #0369a1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.cs-preview-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.cs-preview-item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  background: #fff;\n  border: 1px solid #e0f2fe;\n  border-radius: 6px;\n  padding: 12px 14px;\n}\n\n.cs-preview-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n\n.cs-preview-amount[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n\n.cs-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.cs-save-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.cs-save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.cs-save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.cs-message[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #16a34a;\n  font-weight: 500;\n}\n.cs-message.error[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY3VycmVuY3ktc2V0dGluZ3MvY3VycmVuY3ktc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUFNLGNBQUE7RUFBZ0IsY0FBQTtBQUd4QjtBQURFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQUdKOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFFRjs7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFFRjtBQUFFO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUVKO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQUY7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGRjtBQUlFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFGSjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhGO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU9BO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFKRjtBQU1FO0VBQ0UsbUJBQUE7QUFKSjtBQU9FO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU5GO0FBUUU7RUFDRSxjQUFBO0FBTkoiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVuY3ktc2V0dGluZ3MtcGFnZSB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1heC13aWR0aDogNjgwcHg7XG59XG5cbi5jcy1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjhweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwwLDAsLjA1KTtcbn1cblxuLmNzLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gIHN2ZyB7IGNvbG9yOiAjMjU2M2ViOyBmbGV4LXNocmluazogMDsgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5cbi5jcy1iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICM3YzNhZWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IC43cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY3MtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IC44OHJlbTtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMCAwIDI0cHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMjU2M2ViO1xuICBib3JkZXItcmFkaXVzOiAwIDZweCA2cHggMDtcbn1cblxuLmNzLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uY3MtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAuODJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLjA0ZW07XG59XG5cbi5jcy1zbGlkZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY3Mtc2xpZGVyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMjU2M2ViO1xuICB9XG5cbiAgJjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMjU2M2ViO1xuICB9XG59XG5cbi5jcy1xdWljay1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDZweDtcbn1cblxuLmNzLW9wdC1idG4ge1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgZm9udC1zaXplOiAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XG4gICAgY29sb3I6ICMyNTYzZWI7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzI1NjNlYjtcbiAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmNzLXZhbHVlLWRpc3BsYXkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IC44OHJlbTtcbiAgY29sb3I6ICM0NzU1Njk7XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogIzI1NjNlYjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmNzLXByZXZpZXcge1xuICBiYWNrZ3JvdW5kOiAjZjBmOWZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmFlNmZkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgZm9udC1zaXplOiAuODJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAzNjlhMTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDVlbTtcbiAgfVxufVxuXG4uY3MtcHJldmlldy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNzLXByZXZpZXctaXRlbSB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGYyZmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xufVxuXG4uY3MtcHJldmlldy1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmNzLXByZXZpZXctYW1vdW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxZTI5M2I7XG59XG5cbi5jcy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jcy1zYXZlLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDIycHg7XG4gIGJhY2tncm91bmQ6ICMyNTYzZWI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAuODhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTVzO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6ICMxZDRlZDg7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAuNjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG5cbi5jcy1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAuODVyZW07XG4gIGNvbG9yOiAjMTZhMzRhO1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiAjZGMyNjI2O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return CurrencySettingsComponent;
})();

/***/ }),

/***/ 744:
/*!********************************************************************************!*\
  !*** ./src/app/admin/home-category-control/home-category-control.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeCategoryControlComponent: () => (/* binding */ HomeCategoryControlComponent)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function HomeCategoryControlComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
function HomeCategoryControlComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function HomeCategoryControlComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", option_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r7);
  }
}
function HomeCategoryControlComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading home categories...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeCategoryControlComponent_div_24_article_1_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeCategoryControlComponent_div_24_article_1_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Category ID #", category_r9.id, "");
  }
}
function HomeCategoryControlComponent_div_24_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 26)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Select image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeCategoryControlComponent_div_24_article_1_Template_input_change_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const category_r9 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onImageSelected(category_r9, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 28)(10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeCategoryControlComponent_div_24_article_1_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const category_r9 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.uploadImage(category_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Upload Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeCategoryControlComponent_div_24_article_1_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const category_r9 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.clearSelectedUpload(category_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Clear Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeCategoryControlComponent_div_24_article_1_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const category_r9 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.removeImage(category_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Remove Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Tip: upload a file for saved categories, or paste an image URL and save changes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 32)(19, "div", 33)(20, "div")(21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 34)(26, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeCategoryControlComponent_div_24_article_1_Template_button_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const i_r10 = restoredCtx.index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.moveCategory(i_r10, -1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeCategoryControlComponent_div_24_article_1_Template_button_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const i_r10 = restoredCtx.index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.moveCategory(i_r10, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Category Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeCategoryControlComponent_div_24_article_1_Template_input_ngModelChange_32_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const category_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](category_r9.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeCategoryControlComponent_div_24_article_1_Template_textarea_ngModelChange_35_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const category_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](category_r9.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Image URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeCategoryControlComponent_div_24_article_1_Template_input_ngModelChange_38_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const category_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](category_r9.image_url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 39)(40, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeCategoryControlComponent_div_24_article_1_Template_input_ngModelChange_40_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const category_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](category_r9.is_home_visible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Show this category on the homepage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, HomeCategoryControlComponent_div_24_article_1_span_43_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, HomeCategoryControlComponent_div_24_article_1_span_44_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const category_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.getCategoryImage(category_r9), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", category_r9.name || "Category image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r9.localImageFileName || (category_r9.image_url ? "Custom image set" : "Using fallback image"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8.isSaving || category_r9.isUploadingImage || !category_r9.localImageFile || !category_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8.isSaving || category_r9.isUploadingImage || !category_r9.localImageFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8.isSaving || category_r9.isUploadingImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Card ", i_r10 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", category_r9.product_count || 0, " linked products");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", i_r10 === 0 || ctx_r8.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", i_r10 === ctx_r8.categories.length - 1 || ctx_r8.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", category_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", category_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", category_r9.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", category_r9.is_home_visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !category_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r9.id);
  }
}
function HomeCategoryControlComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeCategoryControlComponent_div_24_article_1_Template, 45, 16, "article", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.categories);
  }
}
function HomeCategoryControlComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No category cards found yet. Add one to get started.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let HomeCategoryControlComponent = /*#__PURE__*/(() => {
  class HomeCategoryControlComponent {
    constructor(http) {
      this.http = http;
      this.apiBaseUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.categories;
      this.displayCountOptions = Array.from({
        length: 12
      }, (_, index) => index + 1);
      this.fallbackImage = 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80';
      this.categories = [];
      this.displayCount = 4;
      this.isLoading = false;
      this.isSaving = false;
      this.errorMessage = '';
      this.successMessage = '';
    }
    ngOnInit() {
      this.loadCategorySettings();
    }
    ngOnDestroy() {
      this.revokeAllPreviews();
    }
    loadCategorySettings() {
      this.isLoading = true;
      this.errorMessage = '';
      this.http.get(`${this.apiBaseUrl}/admin`).subscribe({
        next: response => {
          this.syncFromResponse(response);
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to load home category settings.';
          this.isLoading = false;
        }
      });
    }
    addCategory() {
      this.successMessage = '';
      this.errorMessage = '';
      this.categories = [...this.categories, {
        name: '',
        description: '',
        image_url: '',
        is_home_visible: true,
        sort_order: this.categories.length,
        product_count: 0,
        localImageFile: null,
        localImageFileName: '',
        previewUrl: null,
        isUploadingImage: false
      }];
    }
    moveCategory(index, direction) {
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= this.categories.length) {
        return;
      }
      const reordered = [...this.categories];
      [reordered[index], reordered[targetIndex]] = [reordered[targetIndex], reordered[index]];
      this.categories = reordered;
      this.successMessage = 'Category order updated. Save changes to publish it on the homepage.';
      this.errorMessage = '';
    }
    saveSettings() {
      const count = Number(this.displayCount);
      if (!Number.isInteger(count) || count < 1 || count > 12) {
        this.errorMessage = 'Visible category count must be between 1 and 12.';
        return;
      }
      const hasBlankName = this.categories.some(category => !String(category.name || '').trim());
      if (hasBlankName) {
        this.errorMessage = 'Each home category card needs a name before saving.';
        return;
      }
      const payload = {
        display_count: count,
        categories: this.categories.map(category => ({
          id: category.id,
          name: String(category.name || '').trim(),
          description: String(category.description || '').trim(),
          image_url: String(category.image_url || '').trim(),
          is_home_visible: category.is_home_visible !== false
        }))
      };
      this.isSaving = true;
      this.errorMessage = '';
      this.successMessage = '';
      this.http.put(`${this.apiBaseUrl}/admin`, payload).subscribe({
        next: response => {
          this.syncFromResponse(response);
          this.successMessage = response?.message || 'Home category settings updated.';
          this.isSaving = false;
        },
        error: error => {
          this.errorMessage = error?.error?.message || 'Failed to save home category settings.';
          this.isSaving = false;
        }
      });
    }
    onImageSelected(category, event) {
      const input = event.target;
      const file = input.files?.[0] || null;
      if (!file) {
        this.clearSelectedUpload(category);
        return;
      }
      const allowed = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowed.includes(file.type)) {
        this.errorMessage = 'Only JPG, PNG, and WEBP images are allowed.';
        this.clearSelectedUpload(category);
        input.value = '';
        return;
      }
      this.errorMessage = '';
      this.successMessage = '';
      this.clearSelectedUpload(category);
      category.localImageFile = file;
      category.localImageFileName = file.name;
      category.previewUrl = URL.createObjectURL(file);
      input.value = '';
    }
    clearSelectedUpload(category) {
      if (category.previewUrl) {
        URL.revokeObjectURL(category.previewUrl);
      }
      category.localImageFile = null;
      category.localImageFileName = '';
      category.previewUrl = null;
    }
    uploadImage(category) {
      if (!category.id) {
        this.errorMessage = 'Save the category first, then upload an image file.';
        return;
      }
      if (!category.localImageFile) {
        this.errorMessage = 'Please choose an image file first.';
        return;
      }
      const payload = new FormData();
      payload.append('image', category.localImageFile);
      category.isUploadingImage = true;
      this.errorMessage = '';
      this.successMessage = '';
      this.http.post(`${this.apiBaseUrl}/admin/${category.id}/image`, payload).subscribe({
        next: response => {
          this.syncFromResponse(response);
          this.successMessage = response?.message || 'Category image uploaded successfully.';
        },
        error: error => {
          this.errorMessage = error?.error?.message || 'Failed to upload category image.';
        },
        complete: () => {
          category.isUploadingImage = false;
        }
      });
    }
    removeImage(category) {
      this.errorMessage = '';
      this.successMessage = '';
      if (!category.id) {
        category.image_url = '';
        this.clearSelectedUpload(category);
        this.successMessage = 'Draft image removed.';
        return;
      }
      if (!category.image_url && !category.localImageFile) {
        this.successMessage = 'This category does not have a custom image to remove.';
        return;
      }
      if (!confirm(`Remove the custom image for ${category.name || 'this category'}?`)) {
        return;
      }
      category.isUploadingImage = true;
      this.http.delete(`${this.apiBaseUrl}/admin/${category.id}/image`).subscribe({
        next: response => {
          this.syncFromResponse(response);
          this.successMessage = response?.message || 'Category image removed successfully.';
        },
        error: error => {
          this.errorMessage = error?.error?.message || 'Failed to remove category image.';
        },
        complete: () => {
          category.isUploadingImage = false;
        }
      });
    }
    getCategoryImage(category) {
      return category.previewUrl || category.image_url || this.fallbackImage;
    }
    syncFromResponse(response) {
      this.revokeAllPreviews();
      this.displayCount = Number(response?.display_count) || 4;
      this.categories = Array.isArray(response?.categories) ? response.categories.map((category, index) => ({
        id: category.id,
        name: String(category.name || ''),
        description: String(category.description || ''),
        image_url: String(category.image_url || ''),
        is_home_visible: category.is_home_visible !== false,
        sort_order: Number(category.sort_order ?? index),
        product_count: Number(category.product_count) || 0,
        localImageFile: null,
        localImageFileName: '',
        previewUrl: null,
        isUploadingImage: false
      })) : [];
    }
    revokeAllPreviews() {
      this.categories.forEach(category => {
        if (category.previewUrl) {
          URL.revokeObjectURL(category.previewUrl);
        }
      });
    }
    static {
      this.ɵfac = function HomeCategoryControlComponent_Factory(t) {
        return new (t || HomeCategoryControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeCategoryControlComponent,
        selectors: [["app-home-category-control"]],
        decls: 27,
        vars: 9,
        consts: [[1, "home-category-control"], [1, "page-head"], ["type", "button", 1, "primary", 3, "disabled", "click"], [1, "messages"], ["class", "message success", 4, "ngIf"], ["class", "message error", 4, "ngIf"], [1, "card", "controls-card"], [1, "display-count-row"], ["for", "homeCategoryDisplayCount"], ["id", "homeCategoryDisplayCount", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", 3, "disabled", "click"], [1, "card"], ["class", "muted", 4, "ngIf"], ["class", "category-list", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [1, "message", "success"], [1, "message", "error"], [3, "ngValue"], [1, "muted"], [1, "category-list"], ["class", "category-item", 4, "ngFor", "ngForOf"], [1, "category-item"], [1, "image-panel"], [3, "src", "alt"], [1, "image-note"], [1, "file-picker"], ["type", "file", "accept", "image/png,image/jpeg,image/webp", 3, "change"], [1, "image-actions"], ["type", "button", 1, "secondary", 3, "disabled", "click"], ["type", "button", 1, "danger", 3, "disabled", "click"], [1, "hint"], [1, "item-fields"], [1, "item-head"], [1, "reorder-actions"], ["type", "button", 1, "icon-btn", 3, "disabled", "click"], ["type", "text", "placeholder", "e.g. Bangles", 3, "ngModel", "ngModelChange"], ["rows", "3", "placeholder", "Short homepage description", 3, "ngModel", "ngModelChange"], ["type", "url", "placeholder", "https://...", 3, "ngModel", "ngModelChange"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "meta-row"], ["class", "badge", 4, "ngIf"], ["class", "badge subtle", 4, "ngIf"], [1, "badge"], [1, "badge", "subtle"]],
        template: function HomeCategoryControlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "header", 1)(2, "div")(3, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home Category Control");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Manage which category cards appear on the homepage and add or remove their images.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeCategoryControlComponent_Template_button_click_7_listener() {
              return ctx.saveSettings();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Save Changes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeCategoryControlComponent_p_10_Template, 2, 1, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeCategoryControlComponent_p_11_Template, 2, 1, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "article", 6)(13, "div", 7)(14, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Visible category cards on homepage ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeCategoryControlComponent_Template_select_ngModelChange_16_listener($event) {
              return ctx.displayCount = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeCategoryControlComponent_option_17_Template, 2, 2, "option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeCategoryControlComponent_Template_button_click_18_listener() {
              return ctx.addCategory();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Add Category Card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "article", 12)(21, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Category Cards");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HomeCategoryControlComponent_p_23_Template, 2, 0, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HomeCategoryControlComponent_div_24_Template, 2, 1, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HomeCategoryControlComponent_ng_template_25_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving || ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayCountOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.categories.length)("ngIfElse", _r5);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.home-category-control[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: flex-start;\n}\n\n.page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #64748b;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #0f172a;\n}\n\n.controls-card[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n}\n\n.display-count-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n\n.category-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.category-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px minmax(0, 1fr);\n  gap: 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px;\n}\n\n.image-panel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  align-content: start;\n}\n\n.image-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n\n.image-note[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n  font-size: 0.88rem;\n}\n\n.file-picker[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px dashed #94a3b8;\n  border-radius: 8px;\n  padding: 10px 12px;\n  color: #1e293b;\n  background: #f8fafc;\n  cursor: pointer;\n}\n\n.file-picker[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.image-actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n\n.item-fields[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.item-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: flex-start;\n}\n\n.item-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n\n.item-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #64748b;\n  font-size: 0.9rem;\n}\n\n.reorder-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  color: #1e293b;\n  font-size: 0.92rem;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 9px 10px;\n  background: #fff;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  border-radius: 8px;\n  background: #2563eb;\n  color: #fff;\n  padding: 9px 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nbutton.primary[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\nbutton.secondary[_ngcontent-%COMP%], .icon-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1d4ed8;\n}\n\nbutton.danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  border-color: #dc2626;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 4px 10px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.badge.subtle[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n\n.messages[_ngcontent-%COMP%] {\n  min-height: 22px;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n}\n\n.message.success[_ngcontent-%COMP%] {\n  color: #166534;\n}\n\n.message.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n\n.muted[_ngcontent-%COMP%], .hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n\n@media (max-width: 900px) {\n  .page-head[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    display: grid;\n  }\n  .page-head[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vaG9tZS1jYXRlZ29yeS1jb250cm9sL2hvbWUtY2F0ZWdvcnktY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxhQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBOztFQUVFLFNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsMEJBQUE7SUFDQSxhQUFBO0VBQ0Y7RUFFQTtJQUNFLG9CQUFBO0VBQUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ob21lLWNhdGVnb3J5LWNvbnRyb2wge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE2cHg7XG59XG5cbi5wYWdlLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5wYWdlLWhlYWQgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuXG4ucGFnZS1oZWFkIHAge1xuICBtYXJnaW46IDZweCAwIDA7XG4gIGNvbG9yOiAjNjQ3NDhiO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jYXJkIGgzIHtcbiAgbWFyZ2luOiAwIDAgMTJweDtcbiAgY29sb3I6ICMwZjE3MmE7XG59XG5cbi5jb250cm9scy1jYXJkIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5kaXNwbGF5LWNvdW50LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXRlZ29yeS1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNHB4O1xufVxuXG4uY2F0ZWdvcnktaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjYwcHggbWlubWF4KDAsIDFmcik7XG4gIGdhcDogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuLmltYWdlLXBhbmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1jb250ZW50OiBzdGFydDtcbn1cblxuLmltYWdlLXBhbmVsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbn1cblxuLmltYWdlLW5vdGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBmb250LXNpemU6IDAuODhyZW07XG59XG5cbi5maWxlLXBpY2tlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzk0YTNiODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlLXBpY2tlciBpbnB1dFt0eXBlPSdmaWxlJ10ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5pdGVtLWZpZWxkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTJweDtcbn1cblxuLml0ZW0taGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLml0ZW0taGVhZCBoNCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwZjE3MmE7XG59XG5cbi5pdGVtLWhlYWQgcCB7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ucmVvcmRlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA2cHg7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBmb250LXNpemU6IDAuOTJyZW07XG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEsXG5idXR0b24ge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI1NjNlYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOXB4IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLnByaW1hcnkge1xuICBtaW4td2lkdGg6IDE0MHB4O1xufVxuXG5idXR0b24uc2Vjb25kYXJ5LFxuLmljb24tYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMxZDRlZDg7XG59XG5cbmJ1dHRvbi5kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjZGMyNjI2O1xuICBib3JkZXItY29sb3I6ICNkYzI2MjY7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmNoZWNrYm94LWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jaGVja2JveC1sYWJlbCBpbnB1dCB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ubWV0YS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xuICBjb2xvcjogIzFkNGVkODtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5iYWRnZS5zdWJ0bGUge1xuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICBjb2xvcjogIzQ3NTU2OTtcbn1cblxuLm1lc3NhZ2VzIHtcbiAgbWluLWhlaWdodDogMjJweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubWVzc2FnZS5zdWNjZXNzIHtcbiAgY29sb3I6ICMxNjY1MzQ7XG59XG5cbi5tZXNzYWdlLmVycm9yIHtcbiAgY29sb3I6ICNiOTFjMWM7XG59XG5cbi5tdXRlZCxcbi5oaW50IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLmhpbnQge1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucGFnZS1oZWFkLFxuICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxuXG4gIC5wYWdlLWhlYWQge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return HomeCategoryControlComponent;
})();

/***/ }),

/***/ 5108:
/*!********************************************************!*\
  !*** ./src/app/admin/layout/admin-layout.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutComponent: () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _shared_services_currency_preference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/currency-preference.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);







function AdminLayoutComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "DivaraCraft");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Admin Panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AdminLayoutComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "CATALOGUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminLayoutComponent_a_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r10.label);
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function AdminLayoutComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AdminLayoutComponent_a_11_span_3_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r10.route)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0))("title", !ctx_r2.sidebarOpen ? item_r10.label : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("d", item_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.sidebarOpen);
  }
}
function AdminLayoutComponent_ng_container_12_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "SETTINGS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminLayoutComponent_ng_container_12_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.superAdminNavItem.label);
  }
}
function AdminLayoutComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminLayoutComponent_ng_container_12_p_1_Template, 2, 0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "svg", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "circle", 58)(5, "line", 59)(6, "line", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdminLayoutComponent_ng_container_12_span_7_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.sidebarOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r3.superAdminNavItem.route)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0))("title", !ctx_r3.sidebarOpen ? ctx_r3.superAdminNavItem.label : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.sidebarOpen);
  }
}
function AdminLayoutComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "DivaraCraft \u00A9 2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AdminLayoutComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminLayoutComponent_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.toggleSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminLayoutComponent_ng_container_31_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r17.label);
  }
}
function AdminLayoutComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminLayoutComponent_ng_container_31_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isActive(item_r17.route));
  }
}
function AdminLayoutComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r20.label);
  }
}
function AdminLayoutComponent_small_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.currencyMessage);
  }
}
function AdminLayoutComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65)(1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminLayoutComponent_div_50_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.onLogout($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 68)(4, "polyline", 69)(5, "line", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
let AdminLayoutComponent = /*#__PURE__*/(() => {
  class AdminLayoutComponent {
    get superAdminNavItem() {
      return {
        label: 'Currency Settings',
        route: '/admin/currency-settings',
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
      };
    }
    get isSuperAdmin() {
      return this.adminUserType === 'super_admin';
    }
    constructor(router, http, currencyPreferenceService) {
      this.router = router;
      this.http = http;
      this.currencyPreferenceService = currencyPreferenceService;
      this.sidebarOpen = true;
      this.authApiUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.AUTH_API_URL;
      this.selectedCurrency = 'USD';
      this.adminId = null;
      this.adminUserType = '';
      this.isSavingCurrency = false;
      this.currencyMessage = '';
      this.isProfileMenuOpen = false;
      this.currencyOptions = [{
        value: 'USD',
        label: 'USD ($)'
      }, {
        value: 'INR',
        label: 'INR (Rs.)'
      }];
      this.navItems = [{
        label: 'Add Product',
        route: '/admin/add-product',
        icon: 'M12 5v14M5 12h14'
      }, {
        label: 'Products',
        route: '/admin/products',
        icon: 'M4 6h16M4 10h16M4 14h16M4 18h16'
      }, {
        label: 'Users',
        route: '/admin/users',
        icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M29 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'
      }, {
        label: 'Slider Settings',
        route: '/admin/slider-settings',
        icon: 'M4 19h16M4 12h10M4 5h16M16 12l4-3v6l-4-3z'
      }, {
        label: 'Home Category Control',
        route: '/admin/home-category-control',
        icon: 'M4 6h16v12H4zM8 10h8M8 14h5'
      }, {
        label: 'Manage Banners',
        route: '/admin/manage-banners',
        icon: 'M4 6h16v4H4zM4 12h16v4H4zM4 18h16v2H4z'
      }, {
        label: 'AI Queue',
        route: '/admin/ai-queue',
        icon: 'M3 6h18M3 12h18M3 18h12M17 16l4 2-4 2v-4z'
      }, {
        label: 'Reviews',
        route: '/admin/reviews',
        icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'
      }, {
        label: 'Frontend Settings',
        route: '/admin/settings',
        icon: 'M12 9v2m0 4v2m0 4v2m0-16v2M8.34 3.66l1.41 1.41m2.83 2.83l1.41 1.41m2.83 2.83l1.41 1.41M3.66 8.34l1.41-1.41m2.83-2.83l1.41-1.41m2.83-2.83l1.41-1.41'
      }];
    }
    ngOnInit() {
      this.selectedCurrency = this.currencyPreferenceService.getCurrency();
      this.adminId = this.getAdminIdFromSession();
      this.adminUserType = this.getAdminUserTypeFromSession();
      this.loadAdminCurrencyPreference();
      this.loadGlobalMultiplier();
    }
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
    isActive(route) {
      return this.router.isActive(route, {
        paths: 'exact',
        queryParams: 'ignored',
        fragment: 'ignored',
        matrixParams: 'ignored'
      });
    }
    onHeaderCurrencyChange() {
      this.currencyMessage = '';
      this.currencyPreferenceService.setCurrency(this.selectedCurrency);
      if (!this.adminId) {
        this.currencyMessage = 'Admin ID not found in session. Applied locally.';
        return;
      }
      this.isSavingCurrency = true;
      this.http.put(`${this.authApiUrl}/admins/${this.adminId}/currency`, {
        currency: this.selectedCurrency
      }).subscribe({
        next: response => {
          this.isSavingCurrency = false;
          if (response?.preferred_currency === 'USD' || response?.preferred_currency === 'INR') {
            this.selectedCurrency = response.preferred_currency;
            this.currencyPreferenceService.setCurrency(this.selectedCurrency);
          }
          this.currencyMessage = `Currency set to ${this.selectedCurrency}`;
        },
        error: error => {
          this.isSavingCurrency = false;
          this.currencyMessage = error?.error?.error || 'Could not save currency preference.';
        }
      });
    }
    toggleProfileMenu(event) {
      event.stopPropagation();
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
    }
    closeProfileMenu() {
      this.isProfileMenuOpen = false;
    }
    onLogout(event) {
      event.stopPropagation();
      this.closeProfileMenu();
      try {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
      } catch {
        // Ignore storage errors and continue logout flow.
      }
      this.adminId = null;
      this.currencyMessage = '';
      this.router.navigate(['/admin/login']);
    }
    onResize() {
      if (window.innerWidth <= 768) {
        this.sidebarOpen = false;
      } else {
        this.sidebarOpen = true;
      }
    }
    onDocumentClick(event) {
      if (!(event.target instanceof HTMLElement)) {
        return;
      }
      if (!event.target.closest('.admin-profile-menu')) {
        this.closeProfileMenu();
      }
    }
    getAdminIdFromSession() {
      try {
        const raw = localStorage.getItem('admin_user');
        if (!raw) {
          return null;
        }
        const parsed = JSON.parse(raw);
        const numericId = Number(parsed?.id);
        return Number.isInteger(numericId) && numericId > 0 ? numericId : null;
      } catch {
        return null;
      }
    }
    getAdminUserTypeFromSession() {
      try {
        const raw = localStorage.getItem('admin_user');
        if (!raw) return '';
        const parsed = JSON.parse(raw);
        return String(parsed?.userType || parsed?.user_type || '');
      } catch {
        return '';
      }
    }
    loadGlobalMultiplier() {
      this.http.get(`${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/settings/currency-multiplier`).subscribe({
        next: res => {
          const val = Number(res?.multiplier);
          if (Number.isFinite(val) && val >= 1) {
            this.currencyPreferenceService.setUsdMultiplier(val);
          }
        },
        error: () => {}
      });
    }
    loadAdminCurrencyPreference() {
      if (!this.adminId) {
        return;
      }
      this.http.get(`${this.authApiUrl}/admins/${this.adminId}/currency`).subscribe({
        next: response => {
          if (response?.preferred_currency === 'USD' || response?.preferred_currency === 'INR') {
            this.selectedCurrency = response.preferred_currency;
            this.currencyPreferenceService.setCurrency(this.selectedCurrency);
          }
        },
        error: () => {
          this.currencyMessage = 'Could not load saved currency. Using local preference.';
        }
      });
    }
    static {
      this.ɵfac = function AdminLayoutComponent_Factory(t) {
        return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_currency_preference_service__WEBPACK_IMPORTED_MODULE_1__.CurrencyPreferenceService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AdminLayoutComponent,
        selectors: [["app-admin-layout"]],
        hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function AdminLayoutComponent_resize_HostBindingHandler() {
              return ctx.onResize();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("click", function AdminLayoutComponent_click_HostBindingHandler($event) {
              return ctx.onDocumentClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
          }
        },
        decls: 64,
        vars: 18,
        consts: [[1, "admin-shell"], [1, "admin-sidebar"], [1, "sidebar-brand"], [1, "brand-icon"], ["viewBox", "0 0 40 40", "fill", "none"], ["width", "40", "height", "40", "rx", "10", "fill", "#2563eb"], ["d", "M10 28L20 12l10 16H10z", "fill", "#fff", "opacity", ".9"], ["cx", "20", "cy", "21", "r", "3", "fill", "#fff"], ["class", "brand-text", 4, "ngIf"], [1, "sidebar-nav"], ["class", "nav-section-label", 4, "ngIf"], ["class", "nav-item", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "title", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "sidebar-footer", 4, "ngIf"], ["class", "sidebar-overlay", 3, "click", 4, "ngIf"], [1, "admin-main"], [1, "admin-header"], [1, "btn-toggle", 3, "title", "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "width", "20", "height", "20"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "header-breadcrumb"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "16", "height", "16", 2, "color", "#94a3b8"], ["d", "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "breadcrumb-sep"], [1, "breadcrumb-active"], [4, "ngFor", "ngForOf"], [1, "header-right"], [1, "header-currency-control"], ["for", "admin-header-currency"], ["id", "admin-header-currency", 3, "ngModel", "disabled", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "admin-profile-menu"], ["type", "button", "title", "Admin menu", "aria-haspopup", "true", 1, "profile-trigger", 3, "click"], [1, "admin-avatar"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "18", "height", "18"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "admin-info"], [1, "admin-name"], [1, "admin-role"], ["class", "profile-dropdown", "role", "menu", "aria-label", "Admin profile menu", 4, "ngIf"], [1, "admin-content"], [1, "admin-footer"], [1, "footer-sep"], [1, "brand-text"], [1, "brand-name"], [1, "brand-sub"], [1, "nav-section-label"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink", "routerLinkActiveOptions", "title"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "nav-icon"], ["class", "nav-label", 4, "ngIf"], [1, "nav-label"], ["class", "nav-section-label", "style", "margin-top:12px", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item", "nav-item--accent", 3, "routerLink", "routerLinkActiveOptions", "title"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "20", "height", "20", 1, "nav-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "nav-section-label", 2, "margin-top", "12px"], [1, "sidebar-footer"], [1, "sidebar-overlay", 3, "click"], [3, "value"], ["role", "menu", "aria-label", "Admin profile menu", 1, "profile-dropdown"], ["type", "button", "role", "menuitem", 1, "dropdown-item", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "16", "height", "16"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"]],
        template: function AdminLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 5)(6, "path", 6)(7, "circle", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdminLayoutComponent_div_8_Template, 5, 0, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nav", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AdminLayoutComponent_p_10_Template, 2, 0, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AdminLayoutComponent_a_11_Template, 4, 6, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AdminLayoutComponent_ng_container_12_Template, 8, 6, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AdminLayoutComponent_div_13_Template, 3, 0, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AdminLayoutComponent_div_14_Template, 1, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 15)(16, "header", 16)(17, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_17_listener() {
              return ctx.toggleSidebar();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "svg", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "line", 19)(20, "line", 20)(21, "line", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "svg", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "path", 24)(25, "polyline", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u203A");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AdminLayoutComponent_ng_container_31_Template, 2, 1, "ng-container", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 29)(33, "div", 30)(34, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminLayoutComponent_Template_select_ngModelChange_36_listener($event) {
              return ctx.selectedCurrency = $event;
            })("change", function AdminLayoutComponent_Template_select_change_36_listener() {
              return ctx.onHeaderCurrencyChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, AdminLayoutComponent_option_37_Template, 2, 2, "option", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, AdminLayoutComponent_small_38_Template, 2, 1, "small", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 34)(40, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_40_listener($event) {
              return ctx.toggleProfileMenu($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "svg", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "path", 38)(44, "circle", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 40)(46, "span", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Super Admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, AdminLayoutComponent_div_50_Template, 8, 0, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "main", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "footer", 45)(54, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "DivaraCraft Admin Panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u00B7");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Version 1.0");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u00B7");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u00A9 2026 DivaraCraft. All rights reserved.");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("sidebar-collapsed", !ctx.sidebarOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.sidebarOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sidebarOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sidebarOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.navItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSuperAdmin);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sidebarOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sidebarOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.sidebarOpen ? "Collapse sidebar" : "Expand sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.navItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedCurrency)("disabled", ctx.isSavingCurrency);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currencyOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currencyMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", ctx.isProfileMenuOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isProfileMenuOpen);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
        styles: ["@charset \"UTF-8\";\n\n\n\n\n.admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #f1f5f9;\n  position: relative;\n}\n\n\n\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 232px;\n  min-height: 100vh;\n  background: #0f172a;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  transition: width 0.22s ease;\n  overflow: hidden;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  z-index: 200;\n}\n\n.admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n  width: 64px;\n}\n\n\n\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 14px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  min-height: 68px;\n  flex-shrink: 0;\n}\n\n.brand-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  display: block;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #fff;\n  white-space: nowrap;\n  letter-spacing: -0.01em;\n}\n\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-top: 1px;\n}\n\n\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 0 8px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n}\n\n.nav-section-label[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  padding: 0 16px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #475569;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  margin: 2px 8px;\n  border-radius: 9px;\n  text-decoration: none;\n  color: #94a3b8;\n  font-size: 0.88rem;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: background 0.14s, color 0.14s;\n  cursor: pointer;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #1e293b;\n  color: #e2e8f0;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  color: #64748b;\n  transition: color 0.14s;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n\n.nav-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  font-size: 0.73rem;\n  color: #475569;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n\n\n\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 100vh;\n}\n\n\n\n.admin-header[_ngcontent-%COMP%] {\n  height: 58px;\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 20px;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.05);\n  flex-shrink: 0;\n}\n\n.btn-toggle[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 7px 8px;\n  cursor: pointer;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.12s, color 0.12s;\n}\n.btn-toggle[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n\n.header-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: #64748b;\n  flex: 1;\n  overflow: hidden;\n}\n\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 0.95rem;\n}\n\n.breadcrumb-active[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.admin-profile-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.profile-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: transparent;\n  padding: 4px 6px;\n  cursor: pointer;\n  transition: background 0.14s, border-color 0.14s;\n}\n.profile-trigger[_ngcontent-%COMP%]:hover, .profile-trigger[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n  outline: none;\n}\n\n.profile-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 150px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.16);\n  padding: 6px;\n  z-index: 150;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: #0f172a;\n  font-size: 0.83rem;\n  font-weight: 600;\n  padding: 9px 10px;\n  cursor: pointer;\n}\n.dropdown-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #475569;\n  flex-shrink: 0;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus-visible {\n  background: #f1f5f9;\n  outline: none;\n}\n\n.header-currency-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.header-currency-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n  font-weight: 700;\n  line-height: 1;\n}\n.header-currency-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 112px;\n  height: 34px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 8px;\n  background: #fff;\n  color: #0f172a;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.header-currency-control[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: #64748b;\n  max-width: 160px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.admin-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #eff6ff;\n  border: 2px solid #bfdbfe;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2563eb;\n  flex-shrink: 0;\n}\n\n.admin-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 540px) {\n  .admin-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.admin-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.2;\n}\n\n.admin-role[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n}\n\n\n\n.admin-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0;\n  overflow-y: auto;\n}\n\n\n\n.admin-footer[_ngcontent-%COMP%] {\n  height: 44px;\n  background: #ffffff;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n\n.footer-sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n\n\n\n@media (max-width: 768px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100%;\n    transform: translateX(-100%);\n    width: 232px !important;\n    transition: transform 0.22s ease;\n  }\n  .admin-sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.45);\n    z-index: 199;\n    backdrop-filter: blur(2px);\n  }\n  .admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%], .admin-main[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n}\n@media (max-width: 540px) {\n  .header-currency-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .header-currency-control[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-currency-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    min-width: 96px;\n    height: 32px;\n    font-size: 0.78rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsZ0VBQUE7QUFZQSxnRUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBUFc7RUFRWCxrQkFBQTtBQVRGOztBQVlBLGdFQUFBO0FBQ0E7RUFDRSxZQXJCVTtFQXNCVixpQkFBQTtFQUNBLG1CQW5CVztFQW9CWCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSxXQW5Db0I7QUEwQnRCOztBQVlBLFVBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFURjs7QUFZQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFURjs7QUFZQSxRQUFBO0FBQ0E7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVEY7QUFXRTtFQUF1QixVQUFBO0FBUnpCO0FBU0U7RUFBNkIsdUJBQUE7QUFOL0I7QUFPRTtFQUE2QixvQ0FBQTtFQUFtQyxrQkFBQTtBQUhsRTs7QUFNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtBQUhGO0FBS0U7RUFDRSxtQkFsSFk7RUFtSFosY0FBQTtBQUhKO0FBTUU7RUFDRSxtQkF0SGE7RUF1SGIsV0FBQTtBQUpKO0FBTUk7RUFBWSxXQUFBO0FBSGhCOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBSkY7QUFNRTtFQUFvQixjQUFBO0FBSHRCOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BLG1CQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUEsZ0VBQUE7QUFDQTtFQUNFLGFBQUE7QUFIRjs7QUFNQSxnRUFBQTtBQUNBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BLGdFQUFBO0FBQ0E7RUFDRSxZQTFLUztFQTJLVCxtQkF0S1U7RUF1S1YsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtBQUhGO0FBS0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtBQUpGO0FBTUU7RUFFRSxtQkFBQTtFQUNBLHFCQXBQSztFQXFQTCxhQUFBO0FBTEo7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTkY7QUFRRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBTko7QUFTRTtFQUVFLG1CQUFBO0VBQ0EsYUFBQTtBQVJKOztBQVlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQVRGO0FBV0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVEo7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFWSjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFYSjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBWkY7QUFjRTtFQUpGO0lBSThCLGFBQUE7RUFWNUI7QUFDRjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBLGdFQUFBO0FBQ0E7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUEsZ0VBQUE7QUFDQTtFQUNFLFlBcFhTO0VBcVhULG1CQWpYVTtFQWtYViw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7QUFURjs7QUFZQSxnRUFBQTtBQUNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxZQUFBO0lBQ0EsNEJBQUE7SUFDQSx1QkFBQTtJQUNBLGdDQUFBO0VBVEY7RUFXRTtJQUNFLHdCQUFBO0VBVEo7RUFhQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLGtDQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0VBWEY7RUFjQTs7SUFFRSx5QkFBQTtFQVpGO0FBQ0Y7QUFlQTtFQUVJOztJQUVFLGFBQUE7RUFkSjtFQWlCRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFmSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogw6LClMKAw6LClMKAw6LClMKAIFZhcmlhYmxlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbiRzaWRlYmFyLXc6IDIzMnB4O1xuJHNpZGViYXItY29sbGFwc2VkLXc6IDY0cHg7XG4kaGVhZGVyLWg6IDU4cHg7XG4kZm9vdGVyLWg6IDQ0cHg7XG4kc2lkZWJhci1iZzogIzBmMTcyYTtcbiRzaWRlYmFyLWhvdmVyOiAjMWUyOTNiO1xuJHNpZGViYXItYWN0aXZlOiAjMjU2M2ViO1xuJGhlYWRlci1iZzogI2ZmZmZmZjtcbiRjb250ZW50LWJnOiAjZjFmNWY5O1xuJGJvcmRlcjogI2UyZThmMDtcblxuLyogw6LClMKAw6LClMKAw6LClMKAIFNoZWxsIGxheW91dCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5hZG1pbi1zaGVsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAkY29udGVudC1iZztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgU2lkZWJhciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5hZG1pbi1zaWRlYmFyIHtcbiAgd2lkdGg6ICRzaWRlYmFyLXc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1iZztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjJzIGVhc2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMjAwO1xufVxuXG4uYWRtaW4tc2hlbGwuc2lkZWJhci1jb2xsYXBzZWQgLmFkbWluLXNpZGViYXIge1xuICB3aWR0aDogJHNpZGViYXItY29sbGFwc2VkLXc7XG59XG5cbi8qIEJyYW5kICovXG4uc2lkZWJhci1icmFuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMThweCAxNHB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICBtaW4taGVpZ2h0OiA2OHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJyYW5kLWljb24gc3ZnIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnJhbmQtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5icmFuZC1uYW1lIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2ZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG59XG5cbi5icmFuZC1zdWIge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLyogTmF2ICovXG4uc2lkZWJhci1uYXYge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxNnB4IDAgOHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogNHB4OyB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7IGJvcmRlci1yYWRpdXM6IDJweDsgfVxufVxuXG4ubmF2LXNlY3Rpb24tbGFiZWwge1xuICBtYXJnaW46IDAgMCA2cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGNvbG9yOiAjNDc1NTY5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgbWFyZ2luOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE0cywgY29sb3IgMC4xNHM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1ob3ZlcjtcbiAgICBjb2xvcjogI2UyZThmMDtcbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1hY3RpdmU7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICAubmF2LWljb24geyBjb2xvcjogI2ZmZjsgfVxuICB9XG59XG5cbi5uYXYtaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNHM7XG5cbiAgLm5hdi1pdGVtOmhvdmVyICYgeyBjb2xvcjogI2UyZThmMDsgfVxufVxuXG4ubmF2LWxhYmVsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIFNpZGViYXIgZm9vdGVyICovXG4uc2lkZWJhci1mb290ZXIge1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuICBmb250LXNpemU6IDAuNzNyZW07XG4gIGNvbG9yOiAjNDc1NTY5O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIE1vYmlsZSBvdmVybGF5IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnNpZGViYXItb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBNYWluIGFyZWEgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYWRtaW4tbWFpbiB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBUb3AgaGVhZGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmFkbWluLWhlYWRlciB7XG4gIGhlaWdodDogJGhlYWRlci1oO1xuICBiYWNrZ3JvdW5kOiAkaGVhZGVyLWJnO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA1KTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5idG4tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogN3B4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTJzLCBjb2xvciAwLjEycztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIGNvbG9yOiAjMGYxNzJhO1xuICB9XG59XG5cbi5oZWFkZXItYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnJlYWRjcnVtYi1zZXAge1xuICBjb2xvcjogI2NiZDVlMTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuXG4uYnJlYWRjcnVtYi1hY3RpdmUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBmMTcyYTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYWRtaW4tcHJvZmlsZS1tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZmlsZS10cmlnZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE0cywgYm9yZGVyLWNvbG9yIDAuMTRzO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG4ucHJvZmlsZS1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyA4cHgpO1xuICByaWdodDogMDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI2cHggcmdiYSgxNSwgMjMsIDQyLCAwLjE2KTtcbiAgcGFkZGluZzogNnB4O1xuICB6LWluZGV4OiAxNTA7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMGYxNzJhO1xuICBmb250LXNpemU6IDAuODNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDlweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgc3ZnIHtcbiAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5oZWFkZXItY3VycmVuY3ktY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuXG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cblxuICBzZWxlY3Qge1xuICAgIG1pbi13aWR0aDogMTEycHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwZjE3MmE7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMC42NnJlbTtcbiAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuXG4uYWRtaW4tYXZhdGFyIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjYmZkYmZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICMyNTYzZWI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYWRtaW4taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuLmFkbWluLW5hbWUge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGYxNzJhO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uYWRtaW4tcm9sZSB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBDb250ZW50IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmFkbWluLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgRm9vdGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmFkbWluLWZvb3RlciB7XG4gIGhlaWdodDogJGZvb3Rlci1oO1xuICBiYWNrZ3JvdW5kOiAkaGVhZGVyLWJnO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiAjOTRhM2I4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmZvb3Rlci1zZXAge1xuICBjb2xvcjogI2NiZDVlMTtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFJlc3BvbnNpdmUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFkbWluLXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB3aWR0aDogJHNpZGViYXItdyAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjIycyBlYXNlO1xuXG4gICAgJi5vcGVuIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cblxuICAuc2lkZWJhci1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjQ1KTtcbiAgICB6LWluZGV4OiAxOTk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cblxuICAuYWRtaW4tc2hlbGwuc2lkZWJhci1jb2xsYXBzZWQgLmFkbWluLW1haW4sXG4gIC5hZG1pbi1tYWluIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuaGVhZGVyLWN1cnJlbmN5LWNvbnRyb2wge1xuICAgIGxhYmVsLFxuICAgIHNtYWxsIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgc2VsZWN0IHtcbiAgICAgIG1pbi13aWR0aDogOTZweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return AdminLayoutComponent;
})();

/***/ }),

/***/ 4714:
/*!**************************************************************!*\
  !*** ./src/app/admin/product-list/product-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminProductListComponent: () => (/* binding */ AdminProductListComponent)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_pipes_display_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pipes/display-currency.pipe */ 7316);







function AdminProductListComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.filteredProducts.length, " product", ctx_r0.filteredProducts.length !== 1 ? "s" : "", " found ");
  }
}
function AdminProductListComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cat_r10);
  }
}
function AdminProductListComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProductListComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.successMessage);
  }
}
function AdminProductListComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_p_23_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.loadProducts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.errorMessage, " ");
  }
}
function AdminProductListComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading products\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AdminProductListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No products found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_25_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Clear filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function AdminProductListComponent_div_26_tr_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 54);
  }
  if (rf & 2) {
    const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", product_r18.description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function AdminProductListComponent_div_26_tr_17_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_26_tr_17_button_18_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const imageIndex_r27 = restoredCtx.index;
      const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.openImagePreview(product_r18, imageIndex_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r26 = ctx.$implicit;
    const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("primary", image_r26.is_primary_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Preview image for " + product_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r26.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r18.name);
  }
}
function AdminProductListComponent_div_26_tr_17_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_26_tr_17_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.openHiddenImagesPreview(product_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Preview remaining images for " + product_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", ctx_r22.getHiddenImageCount(product_r18), " ");
  }
}
function AdminProductListComponent_div_26_tr_17_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_26_tr_17_ng_container_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.goToEditProduct(product_r18.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_26_tr_17_ng_container_23_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.requestDelete(product_r18.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function AdminProductListComponent_div_26_tr_17_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delete?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_26_tr_17_ng_container_24_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);
      const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r41.confirmDelete(product_r18.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_26_tr_17_ng_container_24_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.cancelDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function AdminProductListComponent_div_26_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 42)(1, "td", 35)(2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 36)(5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdminProductListComponent_div_26_tr_17_div_7_Template, 1, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 37)(9, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 38)(12, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "displayCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 39)(16, "div", 49)(17, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AdminProductListComponent_div_26_tr_17_button_18_Template, 2, 5, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AdminProductListComponent_div_26_tr_17_button_19_Template, 2, 2, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AdminProductListComponent_div_26_tr_17_ng_container_23_Template, 5, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AdminProductListComponent_div_26_tr_17_ng_container_24_Template, 7, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r17.getImageUrl(product_r18), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r18.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r18.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 15, product_r18.price, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("scrollable", ctx_r17.getProductImages(product_r18).length > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("scrollable", ctx_r17.getProductImages(product_r18).length > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r17.getVisibleProductImages(product_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.getHiddenImageCount(product_r18) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r17.getProductImages(product_r18).length, " images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.confirmDeleteId !== product_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.confirmDeleteId === product_r18.id);
  }
}
function AdminProductListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "table", 34)(2, "thead")(3, "tr")(4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AdminProductListComponent_div_26_tr_17_Template, 25, 18, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.pagedProducts);
  }
}
function AdminProductListComponent_div_27_nav_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_27_nav_3_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r51.goToPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProductListComponent_div_27_nav_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProductListComponent_div_27_nav_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_27_nav_3_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r55);
      const page_r53 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r54.goToPage(page_r53));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r53 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", page_r53 === ctx_r48.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](page_r53);
  }
}
function AdminProductListComponent_div_27_nav_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProductListComponent_div_27_nav_3_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_27_nav_3_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r56.goToPage(ctx_r56.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r50.totalPages);
  }
}
function AdminProductListComponent_div_27_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 66)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_27_nav_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r58.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2039");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AdminProductListComponent_div_27_nav_3_button_3_Template, 2, 0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdminProductListComponent_div_27_nav_3_span_4_Template, 2, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AdminProductListComponent_div_27_nav_3_button_5_Template, 2, 3, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AdminProductListComponent_div_27_nav_3_span_6_Template, 2, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdminProductListComponent_div_27_nav_3_button_7_Template, 2, 1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_27_nav_3_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r60.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r45.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r45.getPageNumbers()[0] > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r45.getPageNumbers()[0] > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r45.getPageNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r45.getPageNumbers()[ctx_r45.getPageNumbers().length - 1] < ctx_r45.totalPages - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r45.getPageNumbers()[ctx_r45.getPageNumbers().length - 1] < ctx_r45.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r45.currentPage === ctx_r45.totalPages);
  }
}
function AdminProductListComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63)(1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AdminProductListComponent_div_27_nav_3_Template, 10, 7, "nav", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("Showing ", ctx_r8.startIndex, "\u2013", ctx_r8.endIndex, " of ", ctx_r8.filteredProducts.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.totalPages > 1);
  }
}
function AdminProductListComponent_div_28_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Use Left/Right arrow keys to switch images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProductListComponent_div_28_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r62.previewImageCounterLabel);
  }
}
function AdminProductListComponent_div_28_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_28_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r66.showPrevPreviewImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u2039 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProductListComponent_div_28_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_28_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r68.showNextPreviewImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u203A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProductListComponent_div_28_div_15_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_28_div_15_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74);
      const imageIndex_r72 = restoredCtx.index;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r73.selectPreviewImage(imageIndex_r72));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r71 = ctx.$implicit;
    const imageIndex_r72 = ctx.index;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", imageIndex_r72 === ctx_r70.previewImageIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Select preview image " + (imageIndex_r72 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r71.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r70.previewProductName);
  }
}
function AdminProductListComponent_div_28_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminProductListComponent_div_28_div_15_button_1_Template, 2, 5, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r65.previewImages);
  }
}
function AdminProductListComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r75.closeImagePreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 75)(3, "div", 76)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AdminProductListComponent_div_28_p_6_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdminProductListComponent_div_28_span_8_Template, 2, 1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_div_28_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r78.closeImagePreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AdminProductListComponent_div_28_button_12_Template, 2, 0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AdminProductListComponent_div_28_button_14_Template, 2, 0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AdminProductListComponent_div_28_div_15_Template, 2, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Image preview for " + ctx_r9.previewProductName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.previewProductName || "Product Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.hasPreviewNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.hasPreviewNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.hasPreviewNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r9.previewImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r9.previewImageAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.hasPreviewNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.hasPreviewNavigation);
  }
}
let AdminProductListComponent = /*#__PURE__*/(() => {
  class AdminProductListComponent {
    constructor(http, router) {
      this.http = http;
      this.router = router;
      this.apiUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.products;
      this.allProducts = [];
      this.filteredProducts = [];
      this.pagedProducts = [];
      this.searchText = '';
      this.selectedCategory = '';
      this.categories = [];
      this.isLoading = false;
      this.errorMessage = '';
      this.successMessage = '';
      this.confirmDeleteId = null;
      this.previewImageUrl = null;
      this.previewImageAlt = 'Product image preview';
      this.previewImages = [];
      this.previewImageIndex = 0;
      this.previewProductName = '';
      // Pagination
      this.currentPage = 1;
      this.pageSize = 10;
      this.totalPages = 1;
    }
    ngOnInit() {
      this.loadProducts();
    }
    loadProducts() {
      this.isLoading = true;
      this.errorMessage = '';
      this.http.get(this.apiUrl).subscribe({
        next: data => {
          this.allProducts = Array.isArray(data) ? data : data?.data ?? [];
          this.categories = [...new Set(this.allProducts.map(p => p.category).filter(Boolean))].sort();
          this.applyFilter();
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to load products. Ensure the backend is running on port 5002.';
          this.isLoading = false;
        }
      });
    }
    applyFilter() {
      const search = this.searchText.trim().toLowerCase();
      this.filteredProducts = this.allProducts.filter(p => {
        const matchesSearch = !search || p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search) || (p.description ?? '').toLowerCase().includes(search);
        const matchesCategory = !this.selectedCategory || p.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });
      this.currentPage = 1;
      this.updatePage();
    }
    updatePage() {
      this.totalPages = Math.max(1, Math.ceil(this.filteredProducts.length / this.pageSize));
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
      const start = (this.currentPage - 1) * this.pageSize;
      this.pagedProducts = this.filteredProducts.slice(start, start + this.pageSize);
    }
    goToPage(page) {
      if (page < 1 || page > this.totalPages) {
        return;
      }
      this.currentPage = page;
      this.updatePage();
    }
    prevPage() {
      this.goToPage(this.currentPage - 1);
    }
    nextPage() {
      this.goToPage(this.currentPage + 1);
    }
    getPageNumbers() {
      const maxVisible = 5;
      let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
      const end = Math.min(this.totalPages, start + maxVisible - 1);
      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }
      return Array.from({
        length: end - start + 1
      }, (_, i) => start + i);
    }
    getImageUrl(product) {
      const primary = product.images?.find(img => img.is_primary_image);
      return primary?.image_url || product.image_url || 'assets/placeholder.png';
    }
    getProductImages(product) {
      if (Array.isArray(product.images) && product.images.length) {
        return product.images;
      }
      if (product.image_url) {
        return [{
          id: -product.id,
          image_url: product.image_url,
          is_primary_image: true
        }];
      }
      return [];
    }
    getVisibleProductImages(product, maxVisible = 3) {
      return this.getProductImages(product).slice(0, maxVisible);
    }
    getHiddenImageCount(product, maxVisible = 3) {
      const total = this.getProductImages(product).length;
      return Math.max(0, total - maxVisible);
    }
    openHiddenImagesPreview(product, maxVisible = 3) {
      const images = this.getProductImages(product);
      if (!images.length) {
        return;
      }
      const startIndex = Math.min(maxVisible, images.length - 1);
      this.openImagePreview(product, startIndex);
    }
    openImagePreview(product, imageIndex) {
      const images = this.getProductImages(product);
      if (!images.length) {
        return;
      }
      const safeIndex = Math.max(0, Math.min(imageIndex, images.length - 1));
      this.previewImages = images;
      this.previewImageIndex = safeIndex;
      this.previewImageUrl = images[safeIndex].image_url;
      this.previewProductName = product.name;
      this.previewImageAlt = `${product.name} image preview`;
    }
    selectPreviewImage(imageIndex) {
      if (!this.previewImages.length) {
        return;
      }
      const safeIndex = Math.max(0, Math.min(imageIndex, this.previewImages.length - 1));
      this.previewImageIndex = safeIndex;
      this.previewImageUrl = this.previewImages[safeIndex].image_url;
    }
    showPrevPreviewImage() {
      if (!this.previewImages.length) {
        return;
      }
      const nextIndex = (this.previewImageIndex - 1 + this.previewImages.length) % this.previewImages.length;
      this.previewImageIndex = nextIndex;
      this.previewImageUrl = this.previewImages[nextIndex].image_url;
    }
    showNextPreviewImage() {
      if (!this.previewImages.length) {
        return;
      }
      const nextIndex = (this.previewImageIndex + 1) % this.previewImages.length;
      this.previewImageIndex = nextIndex;
      this.previewImageUrl = this.previewImages[nextIndex].image_url;
    }
    closeImagePreview() {
      this.previewImageUrl = null;
      this.previewImageAlt = 'Product image preview';
      this.previewProductName = '';
      this.previewImages = [];
      this.previewImageIndex = 0;
    }
    handlePreviewKeydown(event) {
      if (!this.previewImageUrl) {
        return;
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        this.closeImagePreview();
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.showPrevPreviewImage();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.showNextPreviewImage();
      }
    }
    get hasPreviewNavigation() {
      return this.previewImages.length > 1;
    }
    get previewImageCounterLabel() {
      if (!this.previewImages.length) {
        return '';
      }
      return `${this.previewImageIndex + 1} / ${this.previewImages.length}`;
    }
    requestDelete(id) {
      this.confirmDeleteId = id;
    }
    cancelDelete() {
      this.confirmDeleteId = null;
    }
    confirmDelete(id) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe({
        next: () => {
          this.allProducts = this.allProducts.filter(p => p.id !== id);
          this.confirmDeleteId = null;
          this.successMessage = 'Product deleted successfully.';
          this.applyFilter();
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        error: () => {
          this.errorMessage = 'Failed to delete product.';
          this.confirmDeleteId = null;
        }
      });
    }
    goToAddProduct() {
      this.router.navigate(['/admin/add-product']);
    }
    goToEditProduct(productId) {
      this.router.navigate(['/admin/add-product'], {
        queryParams: {
          id: productId
        }
      });
    }
    clearFilters() {
      this.searchText = '';
      this.selectedCategory = '';
      this.applyFilter();
    }
    get startIndex() {
      return (this.currentPage - 1) * this.pageSize + 1;
    }
    get endIndex() {
      return Math.min(this.currentPage * this.pageSize, this.filteredProducts.length);
    }
    static {
      this.ɵfac = function AdminProductListComponent_Factory(t) {
        return new (t || AdminProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AdminProductListComponent,
        selectors: [["app-admin-product-list"]],
        hostBindings: function AdminProductListComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function AdminProductListComponent_keydown_HostBindingHandler($event) {
              return ctx.handlePreviewKeydown($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
          }
        },
        decls: 29,
        vars: 12,
        consts: [[1, "apl-page"], [1, "apl-top-bar"], [1, "apl-top-left"], [4, "ngIf"], [1, "btn-add", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "width", "16", "height", "16"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "apl-toolbar"], [1, "apl-search-wrap"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Search by name, category or description\u2026", 1, "apl-search", 3, "ngModel", "ngModelChange"], [1, "apl-select", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "btn-clear", 3, "click", 4, "ngIf"], ["class", "msg success", 4, "ngIf"], ["class", "msg error", 4, "ngIf"], ["class", "apl-loading", 4, "ngIf"], ["class", "apl-empty", 4, "ngIf"], ["class", "apl-table-wrap", 4, "ngIf"], ["class", "apl-pagination-row", 4, "ngIf"], ["class", "preview-overlay", 3, "click", 4, "ngIf"], [3, "value"], [1, "btn-clear", 3, "click"], [1, "msg", "success"], [1, "msg", "error"], [1, "btn-link", 3, "click"], [1, "apl-loading"], [1, "spinner"], [1, "apl-empty"], [1, "apl-table-wrap"], [1, "apl-table"], [1, "col-img"], [1, "col-name"], [1, "col-cat"], [1, "col-price"], [1, "col-imgs"], [1, "col-actions"], ["class", "apl-row", 4, "ngFor", "ngForOf"], [1, "apl-row"], [1, "thumb-wrap"], ["loading", "lazy", 1, "thumb", 3, "src", "alt"], [1, "product-name"], ["class", "product-desc", 3, "innerHTML", 4, "ngIf"], [1, "badge-cat"], [1, "price"], [1, "image-gallery-wrap"], [1, "image-gallery"], ["type", "button", "class", "gallery-thumb-btn", 3, "primary", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "more-images-btn", 3, "click", 4, "ngIf"], [1, "image-count-label"], [1, "product-desc", 3, "innerHTML"], ["type", "button", 1, "gallery-thumb-btn", 3, "click"], ["loading", "lazy", 1, "gallery-thumb", 3, "src", "alt"], ["type", "button", 1, "more-images-btn", 3, "click"], [1, "btn-edit", 3, "click"], [1, "btn-delete", 3, "click"], [1, "confirm-text"], [1, "btn-confirm-yes", 3, "click"], [1, "btn-confirm-no", 3, "click"], [1, "apl-pagination-row"], [1, "pg-info"], ["class", "apl-pagination", 4, "ngIf"], [1, "apl-pagination"], [1, "pg-btn", "pg-arrow", 3, "disabled", "click"], ["class", "pg-btn", 3, "click", 4, "ngIf"], ["class", "pg-ellipsis", 4, "ngIf"], ["class", "pg-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "pg-btn", 3, "click"], [1, "pg-ellipsis"], [1, "preview-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "preview-card", 3, "click"], [1, "preview-top-row"], [1, "preview-heading"], [1, "preview-actions"], ["class", "preview-counter", 4, "ngIf"], ["type", "button", 1, "btn-close-preview", 3, "click"], [1, "preview-image-wrap"], ["type", "button", "class", "btn-preview-nav prev", "aria-label", "Previous image", 3, "click", 4, "ngIf"], [1, "preview-image", 3, "src", "alt"], ["type", "button", "class", "btn-preview-nav next", "aria-label", "Next image", 3, "click", 4, "ngIf"], ["class", "preview-thumbs", 4, "ngIf"], [1, "preview-counter"], ["type", "button", "aria-label", "Previous image", 1, "btn-preview-nav", "prev", 3, "click"], ["type", "button", "aria-label", "Next image", 1, "btn-preview-nav", "next", 3, "click"], [1, "preview-thumbs"], ["type", "button", "class", "preview-thumb-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "preview-thumb-btn", 3, "click"], ["loading", "lazy", 3, "src", "alt"]],
        template: function AdminProductListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Product List");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AdminProductListComponent_p_5_Template, 2, 2, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_Template_button_click_6_listener() {
              return ctx.goToAddProduct();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "line", 6)(9, "line", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Add Product ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "svg", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "circle", 11)(15, "line", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminProductListComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.searchText = $event;
            })("ngModelChange", function AdminProductListComponent_Template_input_ngModelChange_16_listener() {
              return ctx.applyFilter();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminProductListComponent_Template_select_ngModelChange_17_listener($event) {
              return ctx.selectedCategory = $event;
            })("ngModelChange", function AdminProductListComponent_Template_select_ngModelChange_17_listener() {
              return ctx.applyFilter();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "All Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AdminProductListComponent_option_20_Template, 2, 2, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AdminProductListComponent_button_21_Template, 2, 0, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AdminProductListComponent_p_22_Template, 2, 1, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AdminProductListComponent_p_23_Template, 4, 1, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AdminProductListComponent_div_24_Template, 4, 0, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AdminProductListComponent_div_25_Template, 5, 0, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AdminProductListComponent_div_26_Template, 18, 1, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AdminProductListComponent_div_27_Template, 4, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AdminProductListComponent_div_28_Template, 16, 9, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedCategory);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchText || ctx.selectedCategory);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.filteredProducts.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.pagedProducts.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredProducts.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.previewImageUrl);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _shared_pipes_display_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.DisplayCurrencyPipe],
        styles: ["@charset \"UTF-8\";\n\n\n.apl-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 28px 20px 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n\n\n.apl-top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.apl-top-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n\n.apl-top-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n  color: #64748b;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #0f172a;\n  color: #fff;\n  border: 0;\n  border-radius: 10px;\n  padding: 10px 18px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: #1e293b;\n}\n\n\n\n.apl-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n}\n\n.apl-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 220px;\n}\n.apl-search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  color: #94a3b8;\n  pointer-events: none;\n}\n\n.apl-search[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px 9px 34px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 9px;\n  font-size: 0.9rem;\n  color: #0f172a;\n  background: #fff;\n  box-sizing: border-box;\n}\n.apl-search[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n\n.apl-select[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 9px;\n  font-size: 0.9rem;\n  color: #0f172a;\n  background: #fff;\n  cursor: pointer;\n  min-width: 150px;\n}\n.apl-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n}\n\n.btn-clear[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 9px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n\n\n\n.msg[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  padding: 10px 14px;\n  border-radius: 8px;\n}\n.msg.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.msg.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #2563eb;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: inherit;\n  padding: 0;\n  margin-left: 6px;\n  text-decoration: underline;\n}\n\n\n\n.apl-loading[_ngcontent-%COMP%], .apl-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 48px 20px;\n  color: #64748b;\n  font-size: 0.95rem;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\n.apl-table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);\n}\n\n.apl-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.apl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n\n.apl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 3;\n}\n\n.apl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.apl-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.12s;\n}\n.apl-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.apl-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.apl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n}\n\n.apl-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #fcfdff;\n}\n\n\n\n.col-img[_ngcontent-%COMP%] {\n  width: 72px;\n}\n\n.col-name[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.col-cat[_ngcontent-%COMP%] {\n  width: 130px;\n}\n\n.col-price[_ngcontent-%COMP%] {\n  width: 100px;\n  white-space: nowrap;\n}\n\n.col-imgs[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.col-actions[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n\n\n.thumb-wrap[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f1f5f9;\n  flex-shrink: 0;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n\n\n.product-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #0f172a;\n  line-height: 1.35;\n}\n\n.product-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.77rem;\n  color: #94a3b8;\n  margin-top: 3px;\n  line-height: 1.45;\n  max-width: 280px;\n  max-height: 2.2em;\n  overflow: hidden;\n}\n\n.product-desc[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(p, ul[_ngcontent-%COMP%], ol)[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n.badge-cat[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #334155;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 3px 10px;\n  font-size: 0.77rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n\n\n.price[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.image-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 40px;\n}\n.image-gallery.scrollable[_ngcontent-%COMP%] {\n  max-width: 92px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-bottom: 4px;\n  justify-content: flex-start;\n  scrollbar-width: thin;\n  scrollbar-color: #cbd5e1 transparent;\n}\n\n.image-gallery-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.image-gallery-wrap.scrollable[_ngcontent-%COMP%]::before, .image-gallery-wrap.scrollable[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 4px;\n  width: 12px;\n  pointer-events: none;\n  z-index: 2;\n}\n\n.image-gallery-wrap.scrollable[_ngcontent-%COMP%]::before {\n  left: 0;\n  background: linear-gradient(90deg, rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0));\n}\n\n.image-gallery-wrap.scrollable[_ngcontent-%COMP%]::after {\n  right: 0;\n  background: linear-gradient(270deg, rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0));\n}\n\n.image-gallery.scrollable[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n\n.image-gallery.scrollable[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 999px;\n}\n\n.image-gallery.scrollable[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.gallery-thumb-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n  background: #f8fafc;\n  line-height: 0;\n}\n.gallery-thumb-btn[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n}\n.gallery-thumb-btn.primary[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);\n}\n\n.gallery-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.more-images-btn[_ngcontent-%COMP%] {\n  min-width: 40px;\n  height: 40px;\n  border: 1px solid #bfdbfe;\n  border-radius: 999px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.image-count-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 0.74rem;\n  color: #64748b;\n  text-align: left;\n}\n\n.preview-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.72);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 20px;\n}\n\n.preview-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 16px;\n  width: min(94vw, 820px);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35);\n}\n\n.preview-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.preview-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #0f172a;\n  font-weight: 800;\n}\n\n.preview-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n\n.preview-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.preview-counter[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #334155;\n  background: #f1f5f9;\n  border-radius: 999px;\n  padding: 4px 10px;\n}\n\n.preview-image-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 10px;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: calc(90vh - 200px);\n  object-fit: contain;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n\n.btn-close-preview[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  border: 0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  background: #0f172a;\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.btn-preview-nav[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 999px;\n  width: 38px;\n  height: 38px;\n  background: #0f172a;\n  color: #ffffff;\n  font-size: 1.3rem;\n  line-height: 1;\n  cursor: pointer;\n}\n.btn-preview-nav[_ngcontent-%COMP%]:hover {\n  background: #1e293b;\n}\n\n.preview-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  padding: 4px 0 2px;\n}\n\n.preview-thumb-btn[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 10px;\n  border: 1px solid #cbd5e1;\n  padding: 0;\n  overflow: hidden;\n  background: #f8fafc;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.preview-thumb-btn.active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);\n}\n.preview-thumb-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n\n\n.col-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n  border: 1px solid #bfdbfe;\n  border-radius: 7px;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #bfdbfe;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 7px;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #b91c1c;\n  white-space: nowrap;\n}\n\n.btn-confirm-yes[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border: 0;\n  border-radius: 7px;\n  padding: 5px 10px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.btn-confirm-no[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #1e293b;\n  border: 0;\n  border-radius: 7px;\n  padding: 5px 10px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n\n\n.apl-pagination-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n}\n\n.pg-info[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n}\n\n.apl-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.pg-btn[_ngcontent-%COMP%] {\n  min-width: 36px;\n  height: 36px;\n  padding: 0 8px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  color: #334155;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.pg-btn.active[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border-color: #0f172a;\n  color: #fff;\n}\n.pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n\n.pg-arrow[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1;\n}\n\n.pg-ellipsis[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  padding: 0 2px;\n}\n\n\n\n@media (max-width: 700px) {\n  .apl-table-wrap[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .apl-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .col-actions[_ngcontent-%COMP%] {\n    min-width: 140px;\n  }\n  .preview-card[_ngcontent-%COMP%] {\n    width: 95vw;\n    padding: 12px;\n  }\n  .preview-top-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .preview-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .preview-image-wrap[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .btn-preview-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 10px;\n    height: 34px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsK0RBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBLCtEQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUVGO0FBQUU7RUFBVSxtQkFBQTtBQUdaOztBQUFBLCtEQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFDQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBRUY7QUFBRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBRUo7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7QUFFRTtFQUFVLG1CQUFBO0FBQ1o7O0FBRUEsK0RBQUE7QUFDQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBREY7O0FBSUEsK0RBQUE7QUFDQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUFrQjtJQUFLLHlCQUFBO0VBQ3JCO0FBQ0Y7QUFBQSwrREFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUFFRjtBQUFFO0VBQWUsbUJBQUE7QUFHakI7QUFGRTtFQUFVLG1CQUFBO0FBS1o7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBRkE7RUFDRSxtQkFBQTtBQUtGOztBQUZBLGtCQUFBO0FBQ0E7RUFBZSxXQUFBO0FBTWY7O0FBTEE7RUFBZSxnQkFBQTtBQVNmOztBQVJBO0VBQWUsWUFBQTtBQVlmOztBQVhBO0VBQWUsWUFBQTtFQUFjLG1CQUFBO0FBZ0I3Qjs7QUFmQTtFQUFlLFlBQUE7QUFtQmY7O0FBbEJBO0VBQWUsWUFBQTtBQXNCZjs7QUFwQkEsY0FBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBdUJGOztBQXBCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBdUJGOztBQXBCQSxnQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF1QkY7O0FBcEJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXVCRjs7QUFwQkE7RUFDRSxTQUFBO0FBdUJGOztBQXBCQSxtQkFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBdUJGOztBQXBCQSxVQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXVCRjs7QUFwQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUF1QkY7QUFyQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FBdUJKOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFzQkY7O0FBbkJBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQXNCRjs7QUFuQkE7RUFDRSxPQUFBO0VBQ0EscUZBQUE7QUFzQkY7O0FBbkJBO0VBQ0UsUUFBQTtFQUNBLHNGQUFBO0FBc0JGOztBQW5CQTtFQUNFLFdBQUE7QUFzQkY7O0FBbkJBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQXNCRjs7QUFuQkE7RUFDRSx1QkFBQTtBQXNCRjs7QUFuQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBc0JGO0FBcEJFO0VBQ0UscUJBQUE7QUFzQko7QUFuQkU7RUFDRSxxQkFBQTtFQUNBLDZDQUFBO0FBcUJKOztBQWpCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBb0JGOztBQWpCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBb0JGOztBQWpCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFvQkY7O0FBakJBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQW9CRjs7QUFqQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsOENBQUE7QUFvQkY7O0FBakJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBb0JGOztBQWpCQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBb0JGOztBQWpCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFvQkY7O0FBakJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQW9CRjs7QUFqQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQW9CRjs7QUFqQkE7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFvQkY7O0FBakJBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBb0JGOztBQWpCQTtFQUNFLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQW9CRjs7QUFqQkE7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFvQkY7QUFsQkU7RUFDRSxtQkFBQTtBQW9CSjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW1CRjs7QUFoQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBbUJGO0FBakJFO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtBQW1CSjtBQWhCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBa0JKOztBQWRBLFlBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBaUJGOztBQWRBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFpQkY7QUFmRTtFQUFVLG1CQUFBO0FBa0JaOztBQWZBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFrQkY7QUFoQkU7RUFBVSxtQkFBQTtBQW1CWjs7QUFoQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBbUJGOztBQWhCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFtQkY7O0FBaEJBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQW1CRjs7QUFoQkEsK0RBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBbUJGOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQW1CRjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBbUJGOztBQWhCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdEQUFBO0FBbUJGO0FBakJFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQW1CSjtBQWhCRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBa0JKO0FBZkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFpQko7O0FBYkE7RUFBWSxpQkFBQTtFQUFtQixjQUFBO0FBa0IvQjs7QUFqQkE7RUFBZSxjQUFBO0VBQWdCLGNBQUE7QUFzQi9COztBQXBCQSwrREFBQTtBQUNBO0VBQ0U7SUFBa0IsZ0JBQUE7RUF3QmxCO0VBdkJBO0lBQWEsZ0JBQUE7RUEwQmI7RUF6QkE7SUFBZSxnQkFBQTtFQTRCZjtFQTFCQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBNEJGO0VBekJBO0lBQ0UsdUJBQUE7SUFDQSxzQkFBQTtFQTJCRjtFQXhCQTtJQUNFLFdBQUE7SUFDQSw4QkFBQTtFQTBCRjtFQXZCQTtJQUNFLDBCQUFBO0lBQ0EsUUFBQTtFQXlCRjtFQXRCQTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUF3QkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBQYWdlIHdyYXBwZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYXBsLXBhZ2Uge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI4cHggMjBweCA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBUb3AgYmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmFwbC10b3AtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hcGwtdG9wLWxlZnQgaDEge1xuICBtYXJnaW46IDAgMCA0cHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzBmMTcyYTtcbn1cblxuLmFwbC10b3AtbGVmdCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGNvbG9yOiAjNjQ3NDhiO1xufVxuXG4uYnRuLWFkZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICMxZTI5M2I7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFRvb2xiYXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYXBsLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFwbC1zZWFyY2gtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAyMjBweDtcblxuICAuc2VhcmNoLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgY29sb3I6ICM5NGEzYjg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLmFwbC1zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOXB4IDEycHggOXB4IDM0cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMSk7XG4gIH1cbn1cblxuLmFwbC1zZWxlY3Qge1xuICBwYWRkaW5nOiA5cHggMTRweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzBmMTcyYTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xuICB9XG59XG5cbi5idG4tY2xlYXIge1xuICBwYWRkaW5nOiA5cHggMTRweDtcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbiAgY29sb3I6ICNiOTFjMWM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNmZWNhY2E7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIE1lc3NhZ2VzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLm1zZyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICYuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgICBjb2xvcjogIzE2NjUzNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xuICB9XG5cbiAgJi5lcnJvciB7XG4gICAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbiAgICBjb2xvcjogI2I5MWMxYztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhO1xuICB9XG59XG5cbi5idG4tbGluayB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMyNTYzZWI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIExvYWRpbmcgLyBFbXB0eSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5hcGwtbG9hZGluZyxcbi5hcGwtZW1wdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA0OHB4IDIwcHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzI1NjNlYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMC43cyBsaW5lYXIgaW5maW5pdGU7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgVGFibGUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYXBsLXRhYmxlLXdyYXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDE1LCAyMywgNDIsIDAuMDUpO1xufVxuXG4uYXBsLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5hcGwtdGFibGUgdGhlYWQgdHIge1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyZThmMDtcbn1cblxuLmFwbC10YWJsZSB0aGVhZCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMztcbn1cblxuLmFwbC10YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFwbC1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjEycztcblxuICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyB9XG59XG5cbi5hcGwtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hcGwtdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2ZjZmRmZjtcbn1cblxuLyogQ29sdW1uIHdpZHRocyAqL1xuLmNvbC1pbWcgICAgIHsgd2lkdGg6IDcycHg7IH1cbi5jb2wtbmFtZSAgICB7IG1pbi13aWR0aDogMjAwcHg7IH1cbi5jb2wtY2F0ICAgICB7IHdpZHRoOiAxMzBweDsgfVxuLmNvbC1wcmljZSAgIHsgd2lkdGg6IDEwMHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4uY29sLWltZ3MgICAgeyB3aWR0aDogMjIwcHg7IH1cbi5jb2wtYWN0aW9ucyB7IHdpZHRoOiAxNjBweDsgfVxuXG4vKiBUaHVtYm5haWwgKi9cbi50aHVtYi13cmFwIHtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnRodW1iIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBOYW1lICsgZGVzYyAqL1xuLnByb2R1Y3QtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xufVxuXG4ucHJvZHVjdC1kZXNjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43N3JlbTtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIG1heC13aWR0aDogMjgwcHg7XG4gIG1heC1oZWlnaHQ6IDIuMmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZHVjdC1kZXNjIDppcyhwLCB1bCwgb2wpIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBDYXRlZ29yeSBiYWRnZSAqL1xuLmJhZGdlLWNhdCB7XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gIGNvbG9yOiAjMzM0MTU1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgZm9udC1zaXplOiAwLjc3cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKiBQcmljZSAqL1xuLnByaWNlIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBmMTcyYTtcbn1cblxuLmltYWdlLWdhbGxlcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWluLWhlaWdodDogNDBweDtcblxuICAmLnNjcm9sbGFibGUge1xuICAgIG1heC13aWR0aDogOTJweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAjY2JkNWUxIHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5pbWFnZS1nYWxsZXJ5LXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmltYWdlLWdhbGxlcnktd3JhcC5zY3JvbGxhYmxlOjpiZWZvcmUsXG4uaW1hZ2UtZ2FsbGVyeS13cmFwLnNjcm9sbGFibGU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDRweDtcbiAgd2lkdGg6IDEycHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAyO1xufVxuXG4uaW1hZ2UtZ2FsbGVyeS13cmFwLnNjcm9sbGFibGU6OmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNDgsIDI1MCwgMjUyLCAwLjk1KSwgcmdiYSgyNDgsIDI1MCwgMjUyLCAwKSk7XG59XG5cbi5pbWFnZS1nYWxsZXJ5LXdyYXAuc2Nyb2xsYWJsZTo6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyNDgsIDI1MCwgMjUyLCAwLjk1KSwgcmdiYSgyNDgsIDI1MCwgMjUyLCAwKSk7XG59XG5cbi5pbWFnZS1nYWxsZXJ5LnNjcm9sbGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiA2cHg7XG59XG5cbi5pbWFnZS1nYWxsZXJ5LnNjcm9sbGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2NiZDVlMTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG59XG5cbi5pbWFnZS1nYWxsZXJ5LnNjcm9sbGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5nYWxsZXJ5LXRodW1iLWJ0biB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBsaW5lLWhlaWdodDogMDtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XG4gIH1cblxuICAmLnByaW1hcnkge1xuICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgzNywgOTksIDIzNSwgMC4xNSk7XG4gIH1cbn1cblxuLmdhbGxlcnktdGh1bWIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tb3JlLWltYWdlcy1idG4ge1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmZGJmZTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XG4gIGNvbG9yOiAjMWQ0ZWQ4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2UtY291bnQtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDAuNzRyZW07XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucHJldmlldy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjcyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMjAwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHJldmlldy1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IG1pbig5NHZ3LCA4MjBweCk7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjM1KTtcbn1cblxuLnByZXZpZXctdG9wLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucHJldmlldy1oZWFkaW5nIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMGYxNzJhO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucHJldmlldy1oZWFkaW5nIHAge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi5wcmV2aWV3LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnByZXZpZXctY291bnRlciB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMzMzQxNTU7XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbn1cblxuLnByZXZpZXctaW1hZ2Utd3JhcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucHJldmlldy1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAyMDBweCk7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG59XG5cbi5idG4tY2xvc2UtcHJldmlldyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1wcmV2aWV3LW5hdiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWUyOTNiO1xuICB9XG59XG5cbi5wcmV2aWV3LXRodW1icyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiA0cHggMCAycHg7XG59XG5cbi5wcmV2aWV3LXRodW1iLWJ0biB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJi5hY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgzNywgOTksIDIzNSwgMC4yKTtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi8qIEFjdGlvbnMgKi9cbi5jb2wtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5idG4tZWRpdCB7XG4gIGJhY2tncm91bmQ6ICNkYmVhZmU7XG4gIGNvbG9yOiAjMWU0MGFmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjYmZkYmZlOyB9XG59XG5cbi5idG4tZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbiAgY29sb3I6ICNiOTFjMWM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNmZWNhY2E7IH1cbn1cblxuLmNvbmZpcm0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2I5MWMxYztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJ0bi1jb25maXJtLXllcyB7XG4gIGJhY2tncm91bmQ6ICNkYzI2MjY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tY29uZmlybS1ubyB7XG4gIGJhY2tncm91bmQ6ICNlMmU4ZjA7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBQYWdpbmF0aW9uIHJvdyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5hcGwtcGFnaW5hdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5wZy1pbmZvIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLmFwbC1wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5wZy1idG4ge1xuICBtaW4td2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzMzNDE1NTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xMnMsIGJvcmRlci1jb2xvciAwLjEycztcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpOm5vdCguYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgICBib3JkZXItY29sb3I6ICMwZjE3MmE7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjM1O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuLnBnLWFycm93IHsgZm9udC1zaXplOiAxLjJyZW07IGxpbmUtaGVpZ2h0OiAxOyB9XG4ucGctZWxsaXBzaXMgeyBjb2xvcjogIzk0YTNiODsgcGFkZGluZzogMCAycHg7IH1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFJlc3BvbnNpdmUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmFwbC10YWJsZS13cmFwIHsgb3ZlcmZsb3cteDogYXV0bzsgfVxuICAuYXBsLXRhYmxlIHsgbWluLXdpZHRoOiA2MDBweDsgfVxuICAuY29sLWFjdGlvbnMgeyBtaW4td2lkdGg6IDE0MHB4OyB9XG5cbiAgLnByZXZpZXctY2FyZCB7XG4gICAgd2lkdGg6IDk1dnc7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuXG4gIC5wcmV2aWV3LXRvcC1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAucHJldmlldy1hY3Rpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAucHJldmlldy1pbWFnZS13cmFwIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5idG4tcHJldmlldy1uYXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return AdminProductListComponent;
})();

/***/ }),

/***/ 1748:
/*!****************************************************************!*\
  !*** ./src/app/admin/queue-monitor/queue-monitor.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueueMonitorComponent: () => (/* binding */ QueueMonitorComponent)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function QueueMonitorComponent_div_9_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.actionMessage);
  }
}
function QueueMonitorComponent_div_9_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.actionError);
  }
}
function QueueMonitorComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QueueMonitorComponent_div_9_p_1_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QueueMonitorComponent_div_9_p_2_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.actionMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.actionError);
  }
}
function QueueMonitorComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "article", 21)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Main Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "article", 21)(18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Dead Letter Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 23)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const s_r8 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r8.queueName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Waiting: ", ctx_r1.countOf(s_r8.main, "waiting"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Active: ", ctx_r1.countOf(s_r8.main, "active"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Delayed: ", ctx_r1.countOf(s_r8.main, "delayed"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Failed: ", ctx_r1.countOf(s_r8.main, "failed"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Completed: ", ctx_r1.countOf(s_r8.main, "completed"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r8.deadLetterQueueName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Waiting: ", ctx_r1.countOf(s_r8.deadLetter, "waiting"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Active: ", ctx_r1.countOf(s_r8.deadLetter, "active"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Failed: ", ctx_r1.countOf(s_r8.deadLetter, "failed"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Completed: ", ctx_r1.countOf(s_r8.deadLetter, "completed"), "");
  }
}
function QueueMonitorComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMonitorComponent_tr_50_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const job_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.retryJob(job_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMonitorComponent_tr_50_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const job_r9 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.removeJob(job_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r9.data.productId || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", job_r9.attemptsMade, "/", job_r9.attemptsMax, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r9.failedReason || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.formatDate(job_r9.finishedOn || job_r9.timestamp));
  }
}
function QueueMonitorComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No failed jobs in main queue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function QueueMonitorComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMonitorComponent_tr_71_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const job_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.retryJob(job_r13.id, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMonitorComponent_tr_71_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const job_r13 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.removeJob(job_r13.id, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r13 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r13.data.sourceJobId || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r13.data.productId || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r13.data.failedReason || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.formatDate(job_r13.timestamp));
  }
}
function QueueMonitorComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No jobs in dead-letter queue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
let QueueMonitorComponent = /*#__PURE__*/(() => {
  class QueueMonitorComponent {
    constructor(http) {
      this.http = http;
      this.baseUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.adminAiQueue;
      this.loading = false;
      this.isUpdatingAiProvider = false;
      this.actionMessage = '';
      this.actionError = '';
      this.selectedAiProvider = 'openai';
      this.activeAiProvider = 'openai';
      this.aiProviderSource = 'env';
      this.stats = null;
      this.failedJobs = [];
      this.deadLetterJobs = [];
    }
    ngOnInit() {
      this.loadAiProvider();
      this.refresh();
    }
    loadAiProvider() {
      this.http.get(`${this.baseUrl}/provider`).subscribe({
        next: response => {
          const provider = response?.provider === 'gemini' ? 'gemini' : 'openai';
          this.activeAiProvider = provider;
          this.selectedAiProvider = provider;
          this.aiProviderSource = response?.source || 'env';
        },
        error: () => {
          this.activeAiProvider = 'openai';
          this.selectedAiProvider = 'openai';
          this.aiProviderSource = 'env';
        }
      });
    }
    updateAiProvider() {
      if (this.isUpdatingAiProvider) {
        return;
      }
      this.isUpdatingAiProvider = true;
      this.actionMessage = '';
      this.actionError = '';
      this.http.patch(`${this.baseUrl}/provider`, {
        provider: this.selectedAiProvider
      }).subscribe({
        next: response => {
          const provider = response?.provider === 'gemini' ? 'gemini' : 'openai';
          this.isUpdatingAiProvider = false;
          this.activeAiProvider = provider;
          this.selectedAiProvider = provider;
          this.aiProviderSource = response?.source || 'runtime';
          this.actionMessage = response?.message || `AI model set to ${provider === 'gemini' ? 'Gemini' : 'OpenAI'}.`;
        },
        error: err => {
          this.isUpdatingAiProvider = false;
          this.actionError = err?.error?.message || err?.error?.error || 'Failed to update AI model';
        }
      });
    }
    refresh() {
      this.loading = true;
      this.actionError = '';
      this.http.get(`${this.baseUrl}/stats`).subscribe({
        next: stats => {
          this.stats = stats;
          this.loadFailedJobs();
        },
        error: err => {
          this.loading = false;
          this.actionError = err?.error?.error || 'Failed to load queue stats';
        }
      });
    }
    loadFailedJobs() {
      this.http.get(`${this.baseUrl}/jobs?state=failed&limit=25`).subscribe({
        next: response => {
          this.failedJobs = response.jobs || [];
          this.loadDeadLetterJobs();
        },
        error: () => {
          this.failedJobs = [];
          this.loadDeadLetterJobs();
        }
      });
    }
    loadDeadLetterJobs() {
      this.http.get(`${this.baseUrl}/jobs?state=waiting&limit=25&dlq=true`).subscribe({
        next: response => {
          this.deadLetterJobs = response.jobs || [];
          this.loading = false;
        },
        error: () => {
          this.deadLetterJobs = [];
          this.loading = false;
        }
      });
    }
    retryJob(jobId, dlq = false) {
      this.actionMessage = '';
      this.actionError = '';
      const suffix = dlq ? '?dlq=true' : '';
      this.http.post(`${this.baseUrl}/jobs/${jobId}/retry${suffix}`, {
        ai_provider: this.selectedAiProvider
      }).subscribe({
        next: res => {
          this.actionMessage = res?.message || 'Job retried';
          this.refresh();
        },
        error: err => {
          this.actionError = err?.error?.error || 'Failed to retry job';
        }
      });
    }
    removeJob(jobId, dlq = false) {
      this.actionMessage = '';
      this.actionError = '';
      const suffix = dlq ? '?dlq=true' : '';
      this.http.delete(`${this.baseUrl}/jobs/${jobId}${suffix}`).subscribe({
        next: res => {
          this.actionMessage = res?.message || 'Job removed';
          this.refresh();
        },
        error: err => {
          this.actionError = err?.error?.error || 'Failed to remove job';
        }
      });
    }
    formatDate(value) {
      if (!value) {
        return '-';
      }
      return new Date(value).toLocaleString();
    }
    countOf(bucket, key) {
      return Number(bucket?.[key] || 0);
    }
    static {
      this.ɵfac = function QueueMonitorComponent_Factory(t) {
        return new (t || QueueMonitorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QueueMonitorComponent,
        selectors: [["app-queue-monitor"]],
        decls: 73,
        vars: 13,
        consts: [[1, "queue-monitor"], [1, "queue-monitor__header"], [1, "btn", 3, "disabled", "click"], ["class", "queue-monitor__alerts", 4, "ngIf"], [1, "card", "queue-monitor__provider-panel"], [1, "queue-monitor__provider-current"], [1, "queue-monitor__provider-actions"], [3, "ngModel", "disabled", "ngModelChange"], ["value", "gemini"], ["value", "openai"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["class", "queue-monitor__cards", 4, "ngIf"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "queue-monitor__alerts"], ["class", "ok", 4, "ngIf"], ["class", "err", 4, "ngIf"], [1, "ok"], [1, "err"], [1, "queue-monitor__cards"], [1, "card"], [1, "name"], [1, "metrics"], [1, "reason"], [1, "btn-small", 3, "click"], [1, "btn-small", "danger", 3, "click"], ["colspan", "6"]],
        template: function QueueMonitorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "header", 1)(2, "div")(3, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "AI Queue Monitor");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Track background indexing jobs and handle failures.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMonitorComponent_Template_button_click_7_listener() {
              return ctx.refresh();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Refresh");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, QueueMonitorComponent_div_9_Template, 3, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 4)(11, "div")(12, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "AI Model for Matching Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Select which provider the admin side should use for AI detail generation and matching requests.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Current: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6)(23, "select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueueMonitorComponent_Template_select_ngModelChange_23_listener($event) {
              return ctx.selectedAiProvider = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Gemini");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "OpenAI");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMonitorComponent_Template_button_click_28_listener() {
              return ctx.updateAiProvider();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, QueueMonitorComponent_div_30_Template, 31, 11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 12)(32, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Main Queue Failed Jobs");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "table")(35, "thead")(36, "tr")(37, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Job ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Attempts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Reason");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Updated");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, QueueMonitorComponent_tr_50_Template, 16, 6, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, QueueMonitorComponent_tr_51_Template, 3, 0, "tr", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "section", 12)(53, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Dead Letter Queue Jobs");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "table")(56, "thead")(57, "tr")(58, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "DLQ Job ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Source Job");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Reason");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Created");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, QueueMonitorComponent_tr_71_Template, 16, 5, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, QueueMonitorComponent_tr_72_Template, 3, 0, "tr", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionMessage || ctx.actionError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.activeAiProvider === "gemini" ? "Gemini" : "OpenAI");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx.aiProviderSource, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedAiProvider)("disabled", ctx.isUpdatingAiProvider || ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isUpdatingAiProvider || ctx.selectedAiProvider === ctx.activeAiProvider);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isUpdatingAiProvider ? "Saving..." : "Apply Model", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stats);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.failedJobs);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.failedJobs.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.deadLetterJobs);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.deadLetterJobs.length);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
        styles: [".queue-monitor[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.queue-monitor__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.queue-monitor__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n}\n.queue-monitor__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #64748b;\n}\n.queue-monitor__alerts[_ngcontent-%COMP%]   .ok[_ngcontent-%COMP%] {\n  color: #166534;\n  margin: 0;\n}\n.queue-monitor__alerts[_ngcontent-%COMP%]   .err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  margin: 0;\n}\n.queue-monitor__cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n}\n.queue-monitor__provider-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.queue-monitor__provider-current[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #334155;\n}\n.queue-monitor__provider-current[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #64748b;\n  margin-left: 6px;\n}\n.queue-monitor__provider-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.queue-monitor__provider-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 140px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 8px 10px;\n  background: #fff;\n  color: #0f172a;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  padding: 14px;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 6px 0 12px;\n  color: #475569;\n  font-size: 13px;\n}\n.card[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(120px, 1fr));\n  gap: 8px;\n  font-size: 13px;\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  overflow: auto;\n}\n.table-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 12px 14px;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 16px;\n}\n.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  padding: 10px;\n  font-size: 13px;\n  text-align: left;\n  vertical-align: top;\n}\n.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  font-weight: 600;\n}\n.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .reason[_ngcontent-%COMP%] {\n  max-width: 280px;\n  word-break: break-word;\n  color: #475569;\n}\n\n.btn[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  background: #fff;\n  color: #0f172a;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n}\n\n.btn-small[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  margin-right: 6px;\n}\n\n.danger[_ngcontent-%COMP%] {\n  border-color: #fecaca;\n  color: #b91c1c;\n}\n\n@media (max-width: 760px) {\n  .queue-monitor__header[_ngcontent-%COMP%], .queue-monitor__provider-panel[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .queue-monitor__provider-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vcXVldWUtbW9uaXRvci9xdWV1ZS1tb25pdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBQ047QUFFSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQU47QUFLSTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FBSE47QUFNSTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FBSk47QUFRRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBUEo7QUFVRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBUko7QUFVSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVJOO0FBWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBVko7QUFZSTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVk47O0FBZUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBWkY7QUFjRTtFQUNFLFNBQUE7QUFaSjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWJKO0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLG9EQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFkSjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBZkY7QUFpQkU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFmSjtBQWtCRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQWhCSjtBQWtCSTs7RUFFRSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQW1CSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFqQk47QUFvQkk7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWxCTjs7QUF1QkE7O0VBRUUseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsaUJBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFwQkY7O0FBdUJBO0VBRUk7SUFFRSxzQkFBQTtJQUNBLG9CQUFBO0VBdEJKO0VBeUJFO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtFQXZCSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXVlLW1vbml0b3Ige1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE2cHg7XG5cbiAgJl9faGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTJweDtcblxuICAgIGgyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIH1cbiAgfVxuXG4gICZfX2FsZXJ0cyB7XG4gICAgLm9rIHtcbiAgICAgIGNvbG9yOiAjMTY2NTM0O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5lcnIge1xuICAgICAgY29sb3I6ICNiOTFjMWM7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgJl9fY2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgJl9fcHJvdmlkZXItcGFuZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgJl9fcHJvdmlkZXItY3VycmVudCB7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICAgIGNvbG9yOiAjMzM0MTU1O1xuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3Byb3ZpZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBzZWxlY3Qge1xuICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxNHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubmFtZSB7XG4gICAgbWFyZ2luOiA2cHggMCAxMnB4O1xuICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5tZXRyaWNzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gICAgZ2FwOiA4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbi50YWJsZS13cmFwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbiAgICB0aCxcbiAgICB0ZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAucmVhc29uIHtcbiAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgfVxuICB9XG59XG5cbi5idG4sXG4uYnRuLXNtYWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG59XG5cbi5idG4tc21hbGwge1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLmRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZlY2FjYTtcbiAgY29sb3I6ICNiOTFjMWM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAucXVldWUtbW9uaXRvciB7XG4gICAgJl9faGVhZGVyLFxuICAgICZfX3Byb3ZpZGVyLXBhbmVsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB9XG5cbiAgICAmX19wcm92aWRlci1hY3Rpb25zIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return QueueMonitorComponent;
})();

/***/ }),

/***/ 2764:
/*!****************************************************!*\
  !*** ./src/app/admin/reviews/reviews.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewsComponent: () => (/* binding */ ReviewsComponent)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function ReviewsComponent_p_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
function ReviewsComponent_p_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function ReviewsComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading review insights\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ReviewsComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No reviews found for the selected filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ReviewsComponent_div_55_article_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Material: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Design: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Craftsmanship: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Comfort: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Value: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const review_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", review_r6.material_quality || "\u2014", "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", review_r6.design_rating || "\u2014", "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", review_r6.craftsmanship || "\u2014", "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", review_r6.comfort || "\u2014", "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", review_r6.value_for_money || "\u2014", "/5");
  }
}
function ReviewsComponent_div_55_article_1_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const review_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r6.review_text);
  }
}
function ReviewsComponent_div_55_article_1_div_32_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", image_r13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ReviewsComponent_div_55_article_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReviewsComponent_div_55_article_1_div_32_a_1_Template, 2, 2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const review_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", review_r6.images);
  }
}
function ReviewsComponent_div_55_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 32)(1, "div", 33)(2, "div")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 34)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 35)(13, "span")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Emotion:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Delivered:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Reviewed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span")(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ReviewsComponent_div_55_article_1_div_30_Template, 21, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ReviewsComponent_div_55_article_1_p_31_Template, 2, 1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ReviewsComponent_div_55_article_1_div_32_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 39)(34, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewsComponent_div_55_article_1_Template_button_click_36_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const review_r6 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.toggleSupport(review_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const review_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r6.order_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", review_r6.customer_name, " \u00B7 ", review_r6.customer_email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("low", review_r6.overall_rating <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.buildStars(review_r6.overall_rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", review_r6.overall_rating, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r6.emotion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.formatDate(review_r6.delivered_at), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.formatDate(review_r6.created_at), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](29, 21, review_r6.total_amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r6.overall_rating >= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r6.review_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r6.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", review_r6.support_follow_up_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r6.support_follow_up_required ? "Needs support follow-up" : "Follow-up resolved", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("resolve", review_r6.support_follow_up_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r5.updatingReviewId === review_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.updatingReviewId === review_r6.id ? "Updating\u2026" : review_r6.support_follow_up_required ? "Mark resolved" : "Send to support", " ");
  }
}
function ReviewsComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReviewsComponent_div_55_article_1_Template, 38, 24, "article", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.filteredReviews);
  }
}
let ReviewsComponent = /*#__PURE__*/(() => {
  class ReviewsComponent {
    constructor(http) {
      this.http = http;
      this.reviewsUrl = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/admin/reviews`;
      this.summary = {
        totalReviews: 0,
        averageRating: 0,
        lowRatings: 0,
        supportFollowUps: 0
      };
      this.reviews = [];
      this.isLoading = false;
      this.errorMessage = '';
      this.successMessage = '';
      this.searchTerm = '';
      this.selectedRatingFilter = 'all';
      this.supportOnly = false;
      this.updatingReviewId = null;
    }
    ngOnInit() {
      this.loadReviews();
    }
    loadReviews() {
      const token = this.getAdminToken();
      if (!token) {
        this.errorMessage = 'Admin token not found. Please log in again.';
        return;
      }
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';
      const params = new URLSearchParams();
      if (this.selectedRatingFilter !== 'all') {
        params.set('rating', this.selectedRatingFilter);
      }
      if (this.supportOnly) {
        params.set('supportOnly', 'true');
      }
      params.set('limit', '150');
      const url = params.toString() ? `${this.reviewsUrl}?${params.toString()}` : this.reviewsUrl;
      this.http.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).subscribe({
        next: response => {
          this.summary = response?.summary || this.summary;
          this.reviews = response?.reviews || [];
          this.isLoading = false;
        },
        error: error => {
          this.errorMessage = error?.error?.error || error?.error?.message || 'Failed to load review insights.';
          this.isLoading = false;
        }
      });
    }
    onFilterChange() {
      this.loadReviews();
    }
    toggleSupport(review) {
      const token = this.getAdminToken();
      if (!token || this.updatingReviewId === review.id) {
        return;
      }
      this.updatingReviewId = review.id;
      const nextValue = !review.support_follow_up_required;
      this.http.patch(`${this.reviewsUrl}/${review.id}/support`, {
        supportRequired: nextValue
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).subscribe({
        next: response => {
          review.support_follow_up_required = response.review.support_follow_up_required;
          this.successMessage = response.message;
          this.updatingReviewId = null;
          this.loadReviews();
          setTimeout(() => {
            this.successMessage = '';
          }, 2500);
        },
        error: error => {
          this.errorMessage = error?.error?.error || error?.error?.message || 'Could not update support follow-up.';
          this.updatingReviewId = null;
        }
      });
    }
    get filteredReviews() {
      const term = this.searchTerm.trim().toLowerCase();
      if (!term) {
        return this.reviews;
      }
      return this.reviews.filter(review => {
        const haystack = [review.order_number, review.customer_name, review.customer_email, review.user_name, review.emotion, review.review_text].join(' ').toLowerCase();
        return haystack.includes(term);
      });
    }
    buildStars(value) {
      const safeValue = Math.max(0, Math.min(5, Math.round(Number(value) || 0)));
      return '★'.repeat(safeValue) + '☆'.repeat(5 - safeValue);
    }
    formatDate(value) {
      if (!value) {
        return '—';
      }
      const date = new Date(value);
      return Number.isNaN(date.getTime()) ? '—' : `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })}`;
    }
    getAdminToken() {
      try {
        const directToken = localStorage.getItem('admin_token');
        if (directToken) {
          return directToken;
        }
        const raw = localStorage.getItem('admin_user');
        if (!raw) {
          return null;
        }
        const parsed = JSON.parse(raw);
        const id = Number(parsed?.id);
        return Number.isInteger(id) && id > 0 ? `admin-token-${id}` : null;
      } catch {
        return null;
      }
    }
    static {
      this.ɵfac = function ReviewsComponent_Factory(t) {
        return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ReviewsComponent,
        selectors: [["app-admin-reviews"]],
        decls: 56,
        vars: 17,
        consts: [[1, "reviews-page"], [1, "reviews-header"], ["type", "button", 1, "btn-refresh", 3, "disabled", "click"], [1, "summary-grid"], [1, "summary-card"], [1, "summary-card", "accent"], [1, "summary-card", "warning"], [1, "summary-card", "support"], [1, "reviews-card"], [1, "filters-bar"], ["type", "text", "placeholder", "Search by order, customer, emotion, or review text", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", "change"], ["value", "all"], ["value", "5"], ["value", "4"], ["value", "3"], ["value", "2"], ["value", "1"], [1, "support-toggle"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["class", "message success", 4, "ngIf"], ["class", "message error", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "review-list", 4, "ngIf"], [1, "message", "success"], [1, "message", "error"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "review-list"], ["class", "review-item", 4, "ngFor", "ngForOf"], [1, "review-item"], [1, "review-item__top"], [1, "rating-pill"], [1, "review-meta"], ["class", "detail-grid", 4, "ngIf"], ["class", "review-text", 4, "ngIf"], ["class", "image-grid", 4, "ngIf"], [1, "review-actions"], [1, "support-badge"], ["type", "button", 1, "btn-support", 3, "disabled", "click"], [1, "detail-grid"], [1, "review-text"], [1, "image-grid"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener", 3, "href"], ["alt", "Customer review upload", 3, "src"]],
        template: function ReviewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Customer Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Track delivered-order feedback, low ratings, and support follow-ups.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewsComponent_Template_button_click_7_listener() {
              return ctx.loadReviews();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "article", 4)(11, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Total reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "article", 5)(16, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Average rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "article", 6)(22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Low ratings");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "article", 7)(27, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Support follow-ups");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8)(32, "div", 9)(33, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ReviewsComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.searchTerm = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ReviewsComponent_Template_select_ngModelChange_34_listener($event) {
              return ctx.selectedRatingFilter = $event;
            })("change", function ReviewsComponent_Template_select_change_34_listener() {
              return ctx.onFilterChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "All ratings");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "5 stars");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "4 stars");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "3 stars");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "2 stars");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "1 star");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 18)(48, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ReviewsComponent_Template_input_ngModelChange_48_listener($event) {
              return ctx.supportOnly = $event;
            })("change", function ReviewsComponent_Template_input_change_48_listener() {
              return ctx.onFilterChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Support only");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ReviewsComponent_p_51_Template, 2, 1, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ReviewsComponent_p_52_Template, 2, 1, "p", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ReviewsComponent_div_53_Template, 4, 0, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ReviewsComponent_div_54_Template, 3, 0, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ReviewsComponent_div_55_Template, 2, 1, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Refreshing\u2026" : "Refresh", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summary.totalReviews);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 14, ctx.summary.averageRating, "1.1-1"), "/5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summary.lowRatings);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summary.supportFollowUps);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchTerm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedRatingFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.supportOnly);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredReviews.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredReviews.length > 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
        styles: [".reviews-page[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 28px 20px 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.reviews-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.reviews-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.reviews-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.92rem;\n}\n\n.btn-refresh[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 10px;\n  padding: 10px 16px;\n  background: #0f172a;\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 18px;\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);\n}\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #64748b;\n  font-size: 0.84rem;\n  margin-bottom: 6px;\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n.summary-card.accent[_ngcontent-%COMP%] {\n  border-color: #c7d2fe;\n  background: #eef2ff;\n}\n.summary-card.warning[_ngcontent-%COMP%] {\n  border-color: #fde68a;\n  background: #fffbeb;\n}\n.summary-card.support[_ngcontent-%COMP%] {\n  border-color: #fecdd3;\n  background: #fff1f2;\n}\n\n.reviews-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px;\n  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);\n}\n\n.filters-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5fr 180px auto;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.filters-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filters-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.9rem;\n}\n.filters-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .filters-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n\n.support-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #334155;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.88rem;\n}\n.message.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.message.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 36px 16px;\n  color: #64748b;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.review-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.review-item[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px;\n  background: linear-gradient(180deg, #ffffff 0%, #fafcff 100%);\n}\n\n.review-item__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.review-item__top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  color: #0f172a;\n  font-size: 1.05rem;\n}\n.review-item__top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.88rem;\n}\n\n.rating-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n  border-radius: 999px;\n  padding: 6px 10px;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n.rating-pill.low[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n\n.review-meta[_ngcontent-%COMP%], .detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 8px 12px;\n  margin-top: 12px;\n  color: #475569;\n  font-size: 0.88rem;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n\n.review-text[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  padding: 12px 14px;\n  border-radius: 10px;\n  background: #f8fafc;\n  color: #0f172a;\n  line-height: 1.6;\n  border: 1px solid #e2e8f0;\n}\n\n.image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 12px;\n}\n.image-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n.image-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n\n.review-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 14px;\n}\n\n.support-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 6px 10px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  background: #ecfdf5;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.support-badge.active[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #c2410c;\n  border-color: #fdba74;\n}\n\n.btn-support[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 10px;\n  padding: 9px 14px;\n  background: #b91c1c;\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-support.resolve[_ngcontent-%COMP%] {\n  background: #0f766e;\n}\n.btn-support[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n@media (max-width: 1024px) {\n  .summary-grid[_ngcontent-%COMP%], .review-meta[_ngcontent-%COMP%], .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 720px) {\n  .reviews-header[_ngcontent-%COMP%], .review-item__top[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filters-bar[_ngcontent-%COMP%], .summary-grid[_ngcontent-%COMP%], .review-meta[_ngcontent-%COMP%], .detail-grid[_ngcontent-%COMP%], .image-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FBRkY7QUFJRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFBVyxxQkFBQTtFQUF1QixtQkFBQTtBQUZwQztBQUdFO0VBQVkscUJBQUE7RUFBdUIsbUJBQUE7QUFDckM7QUFBRTtFQUFZLHFCQUFBO0VBQXVCLG1CQUFBO0FBSXJDOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQUZFOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlKO0FBRkk7O0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUFLTjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFERTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBR0o7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRUo7O0FBRUE7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQUsseUJBQUE7RUFFTDtBQUNGO0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFFRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0U7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFJQTs7RUFFRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGdEQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBSUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBSEY7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBSEo7O0FBT0E7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpGO0FBTUU7RUFDRSxtQkFBQTtBQUpKO0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFTQTtFQUNFOzs7SUFHRSxnREFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFOzs7SUFHRSxzQkFBQTtJQUNBLG9CQUFBO0VBUEY7RUFVQTs7Ozs7SUFLRSwwQkFBQTtFQVJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3cy1wYWdlIHtcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyOHB4IDIwcHggNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ucmV2aWV3cy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMCAwIDZweDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjMGYxNzJhO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgfVxufVxuXG4uYnRuLXJlZnJlc2gge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY1O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuLnN1bW1hcnktZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxNHB4O1xufVxuXG4uc3VtbWFyeS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogMThweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDUpO1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cblxuICBzdHJvbmcge1xuICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cblxuICAmLmFjY2VudCB7IGJvcmRlci1jb2xvcjogI2M3ZDJmZTsgYmFja2dyb3VuZDogI2VlZjJmZjsgfVxuICAmLndhcm5pbmcgeyBib3JkZXItY29sb3I6ICNmZGU2OGE7IGJhY2tncm91bmQ6ICNmZmZiZWI7IH1cbiAgJi5zdXBwb3J0IHsgYm9yZGVyLWNvbG9yOiAjZmVjZGQzOyBiYWNrZ3JvdW5kOiAjZmZmMWYyOyB9XG59XG5cbi5yZXZpZXdzLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNSk7XG59XG5cbi5maWx0ZXJzLWJhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgMTgwcHggYXV0bztcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuXG4gIGlucHV0LFxuICBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjEpO1xuICAgIH1cbiAgfVxufVxuXG4uc3VwcG9ydC10b2dnbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGNvbG9yOiAjMzM0MTU1O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lc3NhZ2Uge1xuICBtYXJnaW46IDAgMCAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcblxuICAmLnN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgY29sb3I6ICMxNjY1MzQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDtcbiAgfVxuXG4gICYuZXJyb3Ige1xuICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gICAgY29sb3I6ICNiOTFjMWM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcbiAgfVxufVxuXG4ubG9hZGluZy1zdGF0ZSxcbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDM2cHggMTZweDtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMjU2M2ViO1xuICBhbmltYXRpb246IHNwaW4gMC43cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ucmV2aWV3LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE0cHg7XG59XG5cbi5yZXZpZXctaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYgMCUsICNmYWZjZmYgMTAwJSk7XG59XG5cbi5yZXZpZXctaXRlbV9fdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgY29sb3I6ICMwZjE3MmE7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgfVxufVxuXG4ucmF0aW5nLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XG4gIGNvbG9yOiAjMWQ0ZWQ4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAmLmxvdyB7XG4gICAgYmFja2dyb3VuZDogI2ZlZjJmMjtcbiAgICBjb2xvcjogI2I5MWMxYztcbiAgICBib3JkZXItY29sb3I6ICNmZWNhY2E7XG4gIH1cbn1cblxuLnJldmlldy1tZXRhLFxuLmRldGFpbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDhweCAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xufVxuXG4uZGV0YWlsLWdyaWQge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5yZXZpZXctdGV4dCB7XG4gIG1hcmdpbjogMTJweCAwIDA7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG59XG5cbi5pbWFnZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIH1cbn1cblxuLnJldmlldy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5zdXBwb3J0LWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kOiAjZWNmZGY1O1xuICBjb2xvcjogIzE2NjUzNDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDtcblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjdlZDtcbiAgICBjb2xvcjogI2MyNDEwYztcbiAgICBib3JkZXItY29sb3I6ICNmZGJhNzQ7XG4gIH1cbn1cblxuLmJ0bi1zdXBwb3J0IHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA5cHggMTRweDtcbiAgYmFja2dyb3VuZDogI2I5MWMxYztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmLnJlc29sdmUge1xuICAgIGJhY2tncm91bmQ6ICMwZjc2NmU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zdW1tYXJ5LWdyaWQsXG4gIC5yZXZpZXctbWV0YSxcbiAgLmRldGFpbC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5yZXZpZXdzLWhlYWRlcixcbiAgLnJldmlldy1pdGVtX190b3AsXG4gIC5yZXZpZXctYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5maWx0ZXJzLWJhcixcbiAgLnN1bW1hcnktZ3JpZCxcbiAgLnJldmlldy1tZXRhLFxuICAuZGV0YWlsLWdyaWQsXG4gIC5pbWFnZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return ReviewsComponent;
})();

/***/ }),

/***/ 628:
/*!******************************************************!*\
  !*** ./src/app/admin/settings/settings.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSettingsComponent: () => (/* binding */ AdminSettingsComponent)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/theme.service */ 9779);
/* harmony import */ var _shared_services_homepage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/homepage.service */ 6458);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);







function AdminSettingsComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u2713 ", ctx_r0.successMessage, "");
  }
}
function AdminSettingsComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u2717 ", ctx_r1.errorMessage, "");
  }
}
function AdminSettingsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading settings\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AdminSettingsComponent_div_10_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSettingsComponent_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSettingsComponent_div_10_div_9_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const option_r7 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.setHomepageLayout(option_r7.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 56)(4, "div", 57)(5, "div", 57)(6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 59)(8, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AdminSettingsComponent_div_10_div_9_div_12_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("selected", ctx_r4.activeHomepage === option_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", option_r7.previewBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", option_r7.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.activeHomepage === option_r7.value);
  }
}
function AdminSettingsComponent_div_10_span_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\uD83D\uDCBE Save Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSettingsComponent_div_10_span_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSettingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Homepage Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Select which homepage design to display on your storefront");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 15)(8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AdminSettingsComponent_div_10_div_9_Template, 13, 9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 12)(11, "div", 13)(12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Homepage Sections Visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Toggle sections on or off to control what appears on your storefront");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 15)(17, "div", 18)(18, "div", 19)(19, "div", 20)(20, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Hero / Banner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Large banner with promotional slides and featured images");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 23)(25, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.sections.hero = $event);
    })("change", function AdminSettingsComponent_div_10_Template_input_change_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.toggleSection("hero"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19)(28, "div", 20)(29, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "AI Bangles Match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Image upload tool to find matching bangles using AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 23)(34, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.sections.aiMatch = $event);
    })("change", function AdminSettingsComponent_div_10_Template_input_change_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.toggleSection("aiMatch"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 19)(37, "div", 20)(38, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Shop by Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Display product category cards and quick filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 23)(43, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.sections.categories = $event);
    })("change", function AdminSettingsComponent_div_10_Template_input_change_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.toggleSection("categories"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 19)(46, "div", 20)(47, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Featured Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Showcase your best-selling or handpicked products");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 23)(52, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.sections.featured = $event);
    })("change", function AdminSettingsComponent_div_10_Template_input_change_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.toggleSection("featured"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 19)(55, "div", 20)(56, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Testimonials / Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Customer reviews and testimonials carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "label", 23)(61, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.sections.testimonials = $event);
    })("change", function AdminSettingsComponent_div_10_Template_input_change_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.toggleSection("testimonials"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 19)(64, "div", 20)(65, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Newsletter Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Email subscription form and newsletter promotion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "label", 23)(70, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.sections.newsletter = $event);
    })("change", function AdminSettingsComponent_div_10_Template_input_change_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.toggleSection("newsletter"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 12)(73, "div", 13)(74, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Theme Colors");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Customize your brand colors across the store");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 15)(79, "div", 26)(80, "div", 27)(81, "label", 28)(82, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Primary Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Used for primary actions and accents");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 30)(87, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_87_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.theme.primaryColor = $event);
    })("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_87_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r25.onThemeColorChange("primaryColor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 27)(91, "label", 33)(92, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Secondary Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Used for text, borders, and backgrounds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 30)(97, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_97_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.theme.secondaryColor = $event);
    })("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_97_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.onThemeColorChange("secondaryColor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 27)(101, "label", 35)(102, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Accent Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Used for highlights and special elements");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 30)(107, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_107_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.theme.accentColor = $event);
    })("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_107_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.onThemeColorChange("accentColor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 27)(111, "label", 37)(112, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Add to Cart Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Button background color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 30)(117, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_117_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.theme.addToCartButtonColor = $event);
    })("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_117_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.onThemeColorChange("addToCartButtonColor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 27)(121, "label", 39)(122, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Add to Cart Hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Button hover state color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 30)(127, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_127_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.theme.addToCartButtonHoverColor = $event);
    })("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_127_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.onThemeColorChange("addToCartButtonHoverColor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 27)(131, "label", 41)(132, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Wishlist Button Hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Wishlist button hover state color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 30)(137, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_137_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.theme.wishlistButtonHoverColor = $event);
    })("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_137_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.onThemeColorChange("wishlistButtonHoverColor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 27)(141, "label", 43)(142, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Header Menu Hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Navigation menu hover state color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 30)(147, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_147_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.theme.headerMenuHoverColor = $event);
    })("ngModelChange", function AdminSettingsComponent_div_10_Template_input_ngModelChange_147_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.onThemeColorChange("headerMenuHoverColor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 45)(151, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Color Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 46)(154, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 49)(167, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSettingsComponent_div_10_Template_button_click_167_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.saveSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](168, AdminSettingsComponent_div_10_span_168_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](169, AdminSettingsComponent_div_10_span_169_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSettingsComponent_div_10_Template_button_click_170_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.resetToDefaults());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, " \u21BA Reset to Defaults ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.homepageLayoutOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.sections.hero);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.sections.aiMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.sections.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.sections.featured);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.sections.testimonials);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.sections.newsletter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.theme.primaryColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.theme.primaryColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.theme.secondaryColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.theme.secondaryColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.theme.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.theme.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.theme.addToCartButtonColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.theme.addToCartButtonColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.theme.addToCartButtonHoverColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.theme.addToCartButtonHoverColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.theme.wishlistButtonHoverColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.theme.wishlistButtonHoverColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.theme.headerMenuHoverColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.theme.headerMenuHoverColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r3.theme.primaryColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r3.theme.secondaryColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r3.theme.accentColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.isSaving);
  }
}
let AdminSettingsComponent = /*#__PURE__*/(() => {
  class AdminSettingsComponent {
    constructor(http, themeService, homepageService) {
      this.http = http;
      this.themeService = themeService;
      this.homepageService = homepageService;
      this.apiUrl = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/settings/admin/settings`;
      this.sections = {
        hero: true,
        aiMatch: true,
        categories: true,
        featured: true,
        testimonials: true,
        newsletter: true
      };
      this.theme = {
        primaryColor: '#2563eb',
        secondaryColor: '#64748b',
        accentColor: '#d97706',
        addToCartButtonColor: '#0f3e7e',
        addToCartButtonHoverColor: '#0a2547',
        wishlistButtonHoverColor: '#fecaca',
        headerMenuHoverColor: '#f3f4f6'
      };
      this.isLoading = false;
      this.isSaving = false;
      this.successMessage = '';
      this.errorMessage = '';
      // Homepage layout selector
      this.activeHomepage = 'home1';
      this.homepageLayoutOptions = [{
        value: 'home1',
        label: 'Home 1 — Default',
        description: 'Classic grid layout with sidebar categories, top flash deals and featured sections.',
        previewBg: '#F8F8FF',
        accentColor: '#E8174B'
      }, {
        value: 'home3',
        label: 'Home 3 — Noura Theme',
        description: 'Organic luxury minimal design: warm cream palette, serif headings, full-width editorial sections.',
        previewBg: '#FAF7F2',
        accentColor: '#C4956A'
      }];
    }
    ngOnInit() {
      this.activeHomepage = this.homepageService.layout;
      this.loadSettings();
    }
    loadSettings() {
      this.isLoading = true;
      this.errorMessage = '';
      this.http.get(this.apiUrl).subscribe({
        next: data => {
          this.sections = {
            ...this.sections,
            ...data.sections
          };
          this.theme = {
            ...this.theme,
            ...data.theme
          };
          this.isLoading = false;
          this.themeService.setTheme(this.theme);
        },
        error: error => {
          this.isLoading = false;
          console.error('Failed to load settings:', error);
          // Continue with defaults if endpoint doesn't exist yet
        }
      });
    }

    toggleSection(sectionKey) {
      this.sections[sectionKey] = !this.sections[sectionKey];
      this.saveSettings();
    }
    setHomepageLayout(layout) {
      this.activeHomepage = layout;
      this.homepageService.setLayout(layout);
      this.successMessage = `Homepage switched to ${layout === 'home3' ? 'Noura Theme' : 'Default'}.`;
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }
    onThemeColorChange(colorKey) {
      this.themeService.setTheme(this.theme);
      this.saveSettings();
    }
    saveSettings() {
      this.isSaving = true;
      this.errorMessage = '';
      const payload = {
        sections: this.sections,
        theme: this.theme
      };
      this.http.post(this.apiUrl, payload).subscribe({
        next: data => {
          this.isSaving = false;
          this.successMessage = 'Settings saved successfully!';
          this.sections = {
            ...this.sections,
            ...data.sections
          };
          this.theme = {
            ...this.theme,
            ...data.theme
          };
          // Apply theme globally
          this.themeService.setTheme(this.theme);
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
          this.broadcastSettingsChange();
        },
        error: error => {
          this.isSaving = false;
          console.error('Settings save error:', error);
          this.errorMessage = error?.error?.error || error?.error?.message || 'Failed to save settings. Please try again.';
        }
      });
    }
    resetToDefaults() {
      if (confirm('Are you sure you want to reset all settings to defaults?')) {
        this.sections = {
          hero: true,
          aiMatch: true,
          categories: true,
          featured: true,
          testimonials: true,
          newsletter: true
        };
        this.theme = {
          primaryColor: '#2563eb',
          secondaryColor: '#64748b',
          accentColor: '#d97706',
          addToCartButtonColor: '#0f3e7e',
          addToCartButtonHoverColor: '#0a2547',
          wishlistButtonHoverColor: '#fecaca',
          headerMenuHoverColor: '#f3f4f6'
        };
        this.themeService.setTheme(this.theme);
        this.saveSettings();
      }
    }
    applyTheme() {
      this.themeService.setTheme(this.theme);
    }
    broadcastSettingsChange() {
      // Emit event to refresh component visibility
      window.dispatchEvent(new Event('admin-settings-changed'));
    }
    static {
      this.ɵfac = function AdminSettingsComponent_Factory(t) {
        return new (t || AdminSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_homepage_service__WEBPACK_IMPORTED_MODULE_2__.HomepageService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AdminSettingsComponent,
        selectors: [["app-admin-settings"]],
        decls: 11,
        vars: 4,
        consts: [[1, "settings-page"], [1, "settings-top-bar"], [1, "settings-top-left"], ["class", "msg success", 4, "ngIf"], ["class", "msg error", 4, "ngIf"], ["class", "settings-loading", 4, "ngIf"], ["class", "settings-content", 4, "ngIf"], [1, "msg", "success"], [1, "msg", "error"], [1, "settings-loading"], [1, "spinner"], [1, "settings-content"], [1, "settings-card"], [1, "card-header"], [1, "card-description"], [1, "card-body"], [1, "homepage-layout-selector"], ["class", "layout-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "section-toggle-list"], [1, "section-toggle-item"], [1, "toggle-left"], [1, "section-name"], [1, "section-description"], [1, "toggle-switch"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "toggle-slider"], [1, "color-grid"], [1, "color-picker-item"], ["for", "primary-color", 1, "color-label"], [1, "label-text"], [1, "color-input-wrapper"], ["id", "primary-color", "type", "color", 1, "color-input", 3, "ngModel", "ngModelChange"], [1, "color-value"], ["for", "secondary-color", 1, "color-label"], ["id", "secondary-color", "type", "color", 1, "color-input", 3, "ngModel", "ngModelChange"], ["for", "accent-color", 1, "color-label"], ["id", "accent-color", "type", "color", 1, "color-input", 3, "ngModel", "ngModelChange"], ["for", "add-to-cart-color", 1, "color-label"], ["id", "add-to-cart-color", "type", "color", 1, "color-input", 3, "ngModel", "ngModelChange"], ["for", "add-to-cart-hover-color", 1, "color-label"], ["id", "add-to-cart-hover-color", "type", "color", 1, "color-input", 3, "ngModel", "ngModelChange"], ["for", "wishlist-hover-color", 1, "color-label"], ["id", "wishlist-hover-color", "type", "color", 1, "color-input", 3, "ngModel", "ngModelChange"], ["for", "header-hover-color", 1, "color-label"], ["id", "header-hover-color", "type", "color", 1, "color-input", 3, "ngModel", "ngModelChange"], [1, "color-preview"], [1, "preview-grid"], [1, "preview-item"], [1, "preview-box"], [1, "settings-actions"], [1, "btn", "btn-primary", 3, "disabled", "click"], [4, "ngIf"], [1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "layout-option", 3, "click"], [1, "layout-option__preview"], [1, "layout-option__bars"], [1, "bar", "bar--hero"], [1, "bar", "bar--row"], [1, "bar", "bar--row", "bar--short"], [1, "layout-option__info"], [1, "layout-option__name"], [1, "layout-option__desc"], ["class", "layout-option__check", 4, "ngIf"], [1, "layout-option__check"]],
        template: function AdminSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Frontend Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Control which sections appear on your store homepage and customize your theme colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AdminSettingsComponent_p_7_Template, 2, 1, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminSettingsComponent_p_8_Template, 2, 1, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AdminSettingsComponent_div_9_Template, 4, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AdminSettingsComponent_div_10_Template, 172, 31, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
        styles: [".settings-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.settings-top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.settings-top-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px 0;\n}\n\n.settings-top-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n\n.msg[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.msg.success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #d1fae5;\n}\n.msg.error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fee2e2;\n}\n\n.settings-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 60px 20px;\n  color: #64748b;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.settings-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.settings-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 8px 0;\n}\n\n.card-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.section-toggle-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.homepage-layout-selector[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n\n.layout-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  background: #fff;\n}\n.layout-option[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.layout-option.selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);\n}\n.layout-option__preview[_ngcontent-%COMP%] {\n  height: 120px;\n  padding: 12px;\n  display: flex;\n  align-items: flex-start;\n}\n.layout-option__bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n}\n.layout-option__bars[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.12);\n}\n.layout-option__bars[_ngcontent-%COMP%]   .bar--hero[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: 4px;\n}\n.layout-option__bars[_ngcontent-%COMP%]   .bar--row[_ngcontent-%COMP%] {\n  height: 10px;\n}\n.layout-option__bars[_ngcontent-%COMP%]   .bar--short[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.layout-option__info[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.layout-option__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.layout-option__desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  line-height: 1.5;\n}\n.layout-option__check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 24px;\n  height: 24px;\n  background: #2563eb;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.section-toggle-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.section-toggle-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n\n.toggle-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.section-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 4px 0;\n}\n\n.section-description[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #64748b;\n}\n\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 26px;\n  margin-left: 16px;\n  flex-shrink: 0;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(24px);\n}\n\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #cbd5e1;\n  transition: all 0.3s;\n  border-radius: 26px;\n}\n.toggle-slider[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 22px;\n  width: 22px;\n  left: 2px;\n  bottom: 2px;\n  background: #fff;\n  transition: transform 0.3s;\n  border-radius: 50%;\n}\n\n.color-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n\n.color-picker-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.color-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  cursor: pointer;\n}\n\n.label-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.color-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 400;\n}\n\n.color-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n\n.color-input[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color 0.2s ease;\n}\n.color-input[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.color-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  outline: none;\n}\n\n.color-value[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n  font-size: 14px;\n  font-weight: 600;\n  color: #475569;\n  background: #f1f5f9;\n  padding: 8px 12px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.color-preview[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.color-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 16px 0;\n}\n\n.preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 16px;\n}\n\n.preview-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.preview-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s ease;\n}\n.preview-box[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.preview-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.settings-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-start;\n  padding: 24px;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n  border-radius: 0 0 12px 12px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #64748b;\n  color: #fff;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #475569;\n}\n\n@media (max-width: 768px) {\n  .settings-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .settings-top-bar[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n  .settings-top-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .section-toggle-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .toggle-left[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 12px;\n  }\n  .toggle-switch[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .color-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .settings-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFERjs7QUFJQTtFQUNFO0lBQUsseUJBQUE7RUFBTDtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsNkRBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFLQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQVUscUJBQUE7RUFBdUIsMENBQUE7QUFBbkM7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsNkNBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFGSjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtBQUZOO0FBSU07RUFBVSxZQUFBO0VBQWMsa0JBQUE7QUFBOUI7QUFDTTtFQUFTLFlBQUE7QUFFZjtBQURNO0VBQVcsVUFBQTtBQUlqQjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFFSjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7QUFJRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFNQTtFQUNFLE9BQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFKRjtBQU1FO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBSko7QUFNSTtFQUNFLG1CQUFBO0FBSk47QUFNTTtFQUNFLDJCQUFBO0FBSlI7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBUEY7QUFTRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFZQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQVRGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFURjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQVRGO0FBV0U7RUFDRSxxQkFBQTtBQVRKO0FBWUU7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFWSjs7QUFjQTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFaRjtBQWNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBWko7O0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQWJGOztBQWdCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQWJGOztBQWdCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0JBQUE7QUFiRjtBQWVFO0VBQ0Usc0JBQUE7QUFiSjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQWRGOztBQWtCQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBZkY7QUFpQkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFmSjtBQWtCRTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUFoQko7O0FBb0JBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBakJGO0FBbUJFO0VBQ0UsbUJBQUE7QUFqQko7O0FBcUJBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBbEJGO0FBb0JFO0VBQ0UsbUJBQUE7QUFsQko7O0FBdUJBO0VBQ0U7SUFDRSxhQUFBO0VBcEJGO0VBdUJBO0lBQ0UsbUJBQUE7RUFyQkY7RUF3QkE7SUFDRSxlQUFBO0VBdEJGO0VBeUJBO0lBQ0UsYUFBQTtFQXZCRjtFQTBCQTtJQUNFLGFBQUE7RUF4QkY7RUEyQkE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VBekJGO0VBNEJBO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBMUJGO0VBNkJBO0lBQ0UsY0FBQTtFQTNCRjtFQThCQTtJQUNFLDBCQUFBO0lBQ0EsU0FBQTtFQTVCRjtFQStCQTtJQUNFLHNCQUFBO0VBN0JGO0VBZ0NBO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VBOUJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtcGFnZSB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNldHRpbmdzLXRvcC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XG59XG5cbi5zZXR0aW5ncy10b3AtbGVmdCBoMSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIG1hcmdpbjogMCAwIDhweCAwO1xufVxuXG4uc2V0dGluZ3MtdG9wLWxlZnQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1zZyB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcblxuICAmLnN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gICAgY29sb3I6ICMwNjVmNDY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZmFlNTtcbiAgfVxuXG4gICYuZXJyb3Ige1xuICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7XG4gICAgY29sb3I6ICM5OTFiMWI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZlZTJlMjtcbiAgfVxufVxuXG4uc2V0dGluZ3MtbG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzI1NjNlYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLnNldHRpbmdzLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG59XG5cbi5zZXR0aW5ncy1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZmFmYyAwJSwgI2YxZjVmOSAxMDAlKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XG59XG5cbi5jYXJkLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIG1hcmdpbjogMCAwIDhweCAwO1xufVxuXG4uY2FyZC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi8vIFNlY3Rpb24gVG9nZ2xlc1xuLnNlY3Rpb24tdG9nZ2xlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBIb21lcGFnZSBMYXlvdXQgU2VsZWN0b3Igw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uaG9tZXBhZ2UtbGF5b3V0LXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjYwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG59XG5cbi5sYXlvdXQtb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgJjpob3ZlciB7IGJvcmRlci1jb2xvcjogIzk0YTNiODsgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMDgpOyB9XG5cbiAgJi5zZWxlY3RlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjEyKTtcbiAgfVxuXG4gICZfX3ByZXZpZXcge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fYmFycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmJhciB7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMTIpO1xuXG4gICAgICAmLS1oZXJvIHsgaGVpZ2h0OiAzNnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IH1cbiAgICAgICYtLXJvdyB7IGhlaWdodDogMTBweDsgfVxuICAgICAgJi0tc2hvcnQgeyB3aWR0aDogNjAlOyB9XG4gICAgfVxuICB9XG5cbiAgJl9faW5mbyB7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgfVxuXG4gICZfX25hbWUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMGYxNzJhO1xuICB9XG5cbiAgJl9fZGVzYyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAmX19jaGVjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZDogIzI1NjNlYjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG5cbi5zZWN0aW9uLXRvZ2dsZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XG4gIH1cbn1cblxuLnRvZ2dsZS1sZWZ0IHtcbiAgZmxleDogMTtcbn1cblxuLnNlY3Rpb24tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIG1hcmdpbjogMCAwIDRweCAwO1xufVxuXG4uc2VjdGlvbi1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLy8gVG9nZ2xlIFN3aXRjaFxuLnRvZ2dsZS1zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcblxuICAgICY6Y2hlY2tlZCArIC50b2dnbGUtc2xpZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxMGI5ODE7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRvZ2dsZS1zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjY2JkNWUxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgbGVmdDogMnB4O1xuICAgIGJvdHRvbTogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59XG5cbi8vIENvbG9yIFBpY2tlcnNcbi5jb2xvci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLmNvbG9yLXBpY2tlci1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jb2xvci1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sYWJlbC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzBmMTcyYTtcbn1cblxuLmNvbG9yLWxhYmVsIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbG9yLWlucHV0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2xvci1pbnB1dCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMmU4ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5jb2xvci12YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi8vIENvbG9yIFByZXZpZXdcbi5jb2xvci1wcmV2aWV3IHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzBmMTcyYTtcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gIH1cbn1cblxuLnByZXZpZXctZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG59XG5cbi5wcmV2aWV3LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnByZXZpZXctYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbn1cblxuLnByZXZpZXctaXRlbSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4vLyBBY3Rpb24gQnV0dG9uc1xuLnNldHRpbmdzLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMyNTYzZWI7XG4gIGNvbG9yOiAjZmZmO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6ICMxZDRlZDg7XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjNjQ3NDhiO1xuICBjb2xvcjogI2ZmZjtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDc1NTY5O1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmVcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2V0dGluZ3MtcGFnZSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5zZXR0aW5ncy10b3AtYmFyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgLnNldHRpbmdzLXRvcC1sZWZ0IGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAuY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLnNlY3Rpb24tdG9nZ2xlLWl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAudG9nZ2xlLWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cblxuICAudG9nZ2xlLXN3aXRjaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAuY29sb3ItZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLnNldHRpbmdzLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return AdminSettingsComponent;
})();

/***/ }),

/***/ 3388:
/*!********************************************************************!*\
  !*** ./src/app/admin/slider-settings/slider-settings.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderSettingsComponent: () => (/* binding */ SliderSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);






function SliderSettingsComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
function SliderSettingsComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function SliderSettingsComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.newImageFileName);
  }
}
function SliderSettingsComponent_p_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading slider images...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SliderSettingsComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Image URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_92_Template_input_ngModelChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r12.image_url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_92_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r12.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Subtitle / Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_92_Template_input_ngModelChange_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r12.subtitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Button Link (URL) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_92_Template_input_ngModelChange_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r12.cta_url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Sort Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_92_Template_input_ngModelChange_17_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r12.sort_order = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 19)(19, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_92_Template_input_ngModelChange_19_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r12.is_active = $event);
    })("change", function SliderSettingsComponent_div_92_Template_input_change_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.toggleItemActive(item_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 46)(22, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_div_92_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.saveItem(item_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_div_92_Template_button_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.deleteItem(item_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r12.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r12.title || "Slider image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r12.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r12.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r12.cta_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r12.sort_order);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r12.is_active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.isSaving);
  }
}
function SliderSettingsComponent_p_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No slider images yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SliderSettingsComponent_p_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.h3SuccessMessage);
  }
}
function SliderSettingsComponent_p_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.h3ErrorMessage);
  }
}
function SliderSettingsComponent_span_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.h3NewImageFileName);
  }
}
function SliderSettingsComponent_p_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading banners...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SliderSettingsComponent_div_141_label_24_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r27.h3EditFileName);
  }
}
function SliderSettingsComponent_div_141_label_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Replace Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SliderSettingsComponent_div_141_label_24_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.onH3EditImageSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SliderSettingsComponent_div_141_label_24_span_3_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.h3EditFileName);
  }
}
function SliderSettingsComponent_div_141_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_div_141_ng_container_26_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const banner_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.editHome3Banner(banner_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_div_141_ng_container_26_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const banner_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.deleteHome3Banner(banner_r23.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r25.h3IsSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r25.h3IsSaving);
  }
}
function SliderSettingsComponent_div_141_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_div_141_ng_container_27_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const banner_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.saveHome3Banner(banner_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_div_141_ng_container_27_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.cancelH3Edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r26.h3IsSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r26.h3IsSaving);
  }
}
function SliderSettingsComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Eyebrow Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_141_Template_input_ngModelChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const banner_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](banner_r23.eyebrow = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_141_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const banner_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](banner_r23.heading = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_141_Template_input_ngModelChange_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const banner_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](banner_r23.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " View More Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_141_Template_input_ngModelChange_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const banner_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](banner_r23.view_more_url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Image URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_141_Template_input_ngModelChange_17_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const banner_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](banner_r23.image_url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Sort Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_141_Template_input_ngModelChange_20_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const banner_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](banner_r23.sort_order = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 19)(22, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_div_141_Template_input_ngModelChange_22_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const banner_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](banner_r23.is_active = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SliderSettingsComponent_div_141_label_24_Template, 4, 1, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SliderSettingsComponent_div_141_ng_container_26_Template, 5, 2, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SliderSettingsComponent_div_141_ng_container_27_Template, 5, 2, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const banner_r23 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", banner_r23.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", banner_r23.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", banner_r23.eyebrow)("disabled", ctx_r10.h3EditingId !== banner_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", banner_r23.heading)("disabled", ctx_r10.h3EditingId !== banner_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", banner_r23.description)("disabled", ctx_r10.h3EditingId !== banner_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", banner_r23.view_more_url)("disabled", ctx_r10.h3EditingId !== banner_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", banner_r23.image_url)("disabled", ctx_r10.h3EditingId !== banner_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", banner_r23.sort_order)("disabled", ctx_r10.h3EditingId !== banner_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", banner_r23.is_active)("disabled", ctx_r10.h3EditingId !== banner_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.h3EditingId === banner_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.h3EditingId !== banner_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.h3EditingId === banner_r23.id);
  }
}
function SliderSettingsComponent_p_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No home3 banners yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let SliderSettingsComponent = /*#__PURE__*/(() => {
  class SliderSettingsComponent {
    constructor(http) {
      this.http = http;
      this.apiBaseUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.slider;
      this.home3BannersAdminUrl = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.API_URL}/admin/home3-banners`;
      this.sliderItems = [];
      this.displayCount = 5;
      this.autoplayInterval = 4000;
      this.newTitle = '';
      this.newSubtitle = '';
      this.newCtaUrl = '';
      this.newImageUrl = '';
      this.newSortOrder = 0;
      this.newIsActive = true;
      this.newImageFile = null;
      this.newImageFileName = '';
      this.isLoading = false;
      this.isSaving = false;
      this.errorMessage = '';
      this.successMessage = '';
      // ── Home3 Promo Banners ──────────────────────────────────────────────────────
      this.home3Banners = [];
      this.h3IsLoading = false;
      this.h3IsSaving = false;
      this.h3ErrorMessage = '';
      this.h3SuccessMessage = '';
      // New banner form
      this.h3NewEyebrow = '';
      this.h3NewHeading = '';
      this.h3NewDescription = '';
      this.h3NewViewMoreUrl = '/shop';
      this.h3NewImageUrl = '';
      this.h3NewSortOrder = 0;
      this.h3NewIsActive = true;
      this.h3NewImageFile = null;
      this.h3NewImageFileName = '';
      // Editing existing banner (inline)
      this.h3EditingId = null;
      this.h3EditFile = null;
      this.h3EditFileName = '';
    }
    ngOnInit() {
      this.loadSliderData();
      this.loadHome3Banners();
    }
    loadSliderData() {
      this.isLoading = true;
      this.errorMessage = '';
      this.http.get(`${this.apiBaseUrl}/admin`).subscribe({
        next: response => {
          this.displayCount = response?.display_count || 5;
          this.autoplayInterval = response?.autoplay_interval || 4000;
          this.sliderItems = Array.isArray(response?.items) ? response.items : [];
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to load slider settings.';
          this.isLoading = false;
        }
      });
    }
    onNewImageSelected(event) {
      const input = event.target;
      const file = input.files?.[0] || null;
      if (!file) {
        this.newImageFile = null;
        this.newImageFileName = '';
        return;
      }
      const allowed = ['image/jpeg', 'image/png'];
      if (!allowed.includes(file.type)) {
        this.errorMessage = 'Only JPG and PNG images are allowed.';
        this.newImageFile = null;
        this.newImageFileName = '';
        input.value = '';
        return;
      }
      this.errorMessage = '';
      this.newImageFile = file;
      this.newImageFileName = file.name;
    }
    saveDisplayCount() {
      const count = Number(this.displayCount);
      if (!Number.isInteger(count) || count < 2 || count > 5) {
        this.errorMessage = 'Display count must be between 2 and 5.';
        return;
      }
      this.isSaving = true;
      this.errorMessage = '';
      this.successMessage = '';
      this.http.patch(`${this.apiBaseUrl}/settings`, {
        display_count: count
      }).subscribe({
        next: response => {
          this.displayCount = response.display_count;
          this.successMessage = 'Slider display count updated.';
          this.isSaving = false;
        },
        error: error => {
          this.errorMessage = error?.error?.message || 'Failed to update display count.';
          this.isSaving = false;
        }
      });
    }
    saveAutoplayInterval() {
      const ms = Number(this.autoplayInterval);
      if (!Number.isInteger(ms) || ms < 1000 || ms > 15000) {
        this.errorMessage = 'Autoplay interval must be between 1000 and 15000 ms.';
        return;
      }
      this.isSaving = true;
      this.errorMessage = '';
      this.successMessage = '';
      this.http.patch(`${this.apiBaseUrl}/settings`, {
        autoplay_interval: ms
      }).subscribe({
        next: response => {
          this.autoplayInterval = response.autoplay_interval;
          this.successMessage = `Autoplay interval set to ${response.autoplay_interval / 1000}s.`;
          this.isSaving = false;
        },
        error: error => {
          this.errorMessage = error?.error?.message || 'Failed to update autoplay interval.';
          this.isSaving = false;
        }
      });
    }
    addSliderItem() {
      if (!this.newImageFile && !this.newImageUrl.trim()) {
        this.errorMessage = 'Please provide image URL or upload an image file.';
        return;
      }
      this.isSaving = true;
      this.errorMessage = '';
      this.successMessage = '';
      const payload = new FormData();
      if (this.newImageFile) {
        payload.append('image', this.newImageFile);
      }
      if (this.newImageUrl.trim()) {
        payload.append('image_url', this.newImageUrl.trim());
      }
      payload.append('title', this.newTitle.trim());
      payload.append('subtitle', this.newSubtitle.trim());
      payload.append('cta_url', this.newCtaUrl.trim());
      payload.append('sort_order', String(this.newSortOrder || 0));
      payload.append('is_active', String(this.newIsActive));
      this.http.post(`${this.apiBaseUrl}/admin`, payload).subscribe({
        next: () => {
          this.successMessage = 'Slider image added.';
          this.resetForm();
          this.loadSliderData();
          this.isSaving = false;
        },
        error: error => {
          this.errorMessage = error?.error?.message || 'Failed to add slider image.';
          this.isSaving = false;
        }
      });
    }
    toggleItemActive(item) {
      this.updateSliderItem(item.id, {
        is_active: !item.is_active
      });
    }
    saveItem(item) {
      this.updateSliderItem(item.id, {
        title: item.title,
        subtitle: item.subtitle,
        cta_url: item.cta_url,
        sort_order: item.sort_order,
        image_url: item.image_url,
        is_active: item.is_active
      });
    }
    deleteItem(itemId) {
      if (!confirm('Delete this slider image?')) {
        return;
      }
      this.isSaving = true;
      this.http.delete(`${this.apiBaseUrl}/admin/${itemId}`).subscribe({
        next: () => {
          this.successMessage = 'Slider image deleted.';
          this.sliderItems = this.sliderItems.filter(item => item.id !== itemId);
          this.isSaving = false;
        },
        error: error => {
          this.errorMessage = error?.error?.message || 'Failed to delete slider image.';
          this.isSaving = false;
        }
      });
    }
    updateSliderItem(itemId, payload) {
      this.isSaving = true;
      this.errorMessage = '';
      this.successMessage = '';
      this.http.put(`${this.apiBaseUrl}/admin/${itemId}`, payload).subscribe({
        next: () => {
          this.successMessage = 'Slider image updated.';
          this.loadSliderData();
          this.isSaving = false;
        },
        error: error => {
          this.errorMessage = error?.error?.message || 'Failed to update slider image.';
          this.isSaving = false;
        }
      });
    }
    resetForm() {
      this.newTitle = '';
      this.newSubtitle = '';
      this.newCtaUrl = '';
      this.newImageUrl = '';
      this.newSortOrder = 0;
      this.newIsActive = true;
      this.newImageFile = null;
      this.newImageFileName = '';
    }
    // ── Home3 Banner Methods ──────────────────────────────────────────────────
    getAdminHeaders() {
      try {
        let token = localStorage.getItem('admin_token') || '';
        if (!token) {
          const raw = localStorage.getItem('admin_user');
          if (raw) {
            const parsed = JSON.parse(raw);
            const id = Number(parsed?.id);
            if (Number.isInteger(id) && id > 0) token = `admin-token-${id}`;
          }
        }
        return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
          Authorization: `Bearer ${token}`
        }) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      } catch {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      }
    }
    loadHome3Banners() {
      this.h3IsLoading = true;
      this.h3ErrorMessage = '';
      this.http.get(this.home3BannersAdminUrl, {
        headers: this.getAdminHeaders()
      }).subscribe({
        next: banners => {
          this.home3Banners = banners;
          this.h3IsLoading = false;
        },
        error: () => {
          this.h3ErrorMessage = 'Failed to load home3 banners.';
          this.h3IsLoading = false;
        }
      });
    }
    onH3NewImageSelected(event) {
      const input = event.target;
      const file = input.files?.[0] || null;
      if (!file) {
        this.h3NewImageFile = null;
        this.h3NewImageFileName = '';
        return;
      }
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        this.h3ErrorMessage = 'Only JPG/PNG images allowed.';
        this.h3NewImageFile = null;
        this.h3NewImageFileName = '';
        input.value = '';
        return;
      }
      this.h3ErrorMessage = '';
      this.h3NewImageFile = file;
      this.h3NewImageFileName = file.name;
    }
    onH3EditImageSelected(event) {
      const input = event.target;
      const file = input.files?.[0] || null;
      if (!file) {
        this.h3EditFile = null;
        this.h3EditFileName = '';
        return;
      }
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        this.h3ErrorMessage = 'Only JPG/PNG images allowed.';
        this.h3EditFile = null;
        this.h3EditFileName = '';
        input.value = '';
        return;
      }
      this.h3ErrorMessage = '';
      this.h3EditFile = file;
      this.h3EditFileName = file.name;
    }
    addHome3Banner() {
      if (!this.h3NewHeading.trim()) {
        this.h3ErrorMessage = 'Heading is required.';
        return;
      }
      if (!this.h3NewImageFile && !this.h3NewImageUrl.trim()) {
        this.h3ErrorMessage = 'Provide an image URL or upload an image.';
        return;
      }
      this.h3IsSaving = true;
      this.h3ErrorMessage = '';
      this.h3SuccessMessage = '';
      const payload = new FormData();
      payload.append('eyebrow', this.h3NewEyebrow.trim());
      payload.append('heading', this.h3NewHeading.trim());
      payload.append('description', this.h3NewDescription.trim());
      payload.append('view_more_url', this.h3NewViewMoreUrl.trim() || '/shop');
      payload.append('sort_order', String(this.h3NewSortOrder || 0));
      payload.append('is_active', String(this.h3NewIsActive));
      // Always send image_url if provided (backend will override with file upload if present)
      if (this.h3NewImageUrl.trim()) {
        payload.append('image_url', this.h3NewImageUrl.trim());
      }
      // Include file if uploaded
      if (this.h3NewImageFile) {
        payload.append('image', this.h3NewImageFile);
      }
      this.http.post(this.home3BannersAdminUrl, payload, {
        headers: this.getAdminHeaders()
      }).subscribe({
        next: () => {
          this.h3SuccessMessage = 'Banner added.';
          this.h3ResetNewForm();
          this.loadHome3Banners();
          this.h3IsSaving = false;
        },
        error: err => {
          this.h3ErrorMessage = err?.error?.message || 'Failed to add banner.';
          this.h3IsSaving = false;
        }
      });
    }
    editHome3Banner(banner) {
      this.h3EditingId = banner.id ?? null;
      this.h3EditFile = null;
      this.h3EditFileName = '';
    }
    cancelH3Edit() {
      this.h3EditingId = null;
      this.h3EditFile = null;
      this.h3EditFileName = '';
      this.loadHome3Banners(); // reload to discard in-place edits
    }

    saveHome3Banner(banner) {
      if (!banner.heading?.trim()) {
        this.h3ErrorMessage = 'Heading is required.';
        return;
      }
      this.h3IsSaving = true;
      this.h3ErrorMessage = '';
      this.h3SuccessMessage = '';
      const payload = new FormData();
      payload.append('eyebrow', (banner.eyebrow || '').trim());
      payload.append('heading', banner.heading.trim());
      payload.append('description', (banner.description || '').trim());
      payload.append('view_more_url', (banner.view_more_url || '/shop').trim());
      payload.append('sort_order', String(banner.sort_order ?? 0));
      payload.append('is_active', String(banner.is_active));
      // Always send image_url if present
      if (banner.image_url?.trim()) {
        payload.append('image_url', banner.image_url.trim());
      }
      // Include replacement file if selected
      if (this.h3EditFile) {
        payload.append('image', this.h3EditFile);
      }
      this.http.put(`${this.home3BannersAdminUrl}/${banner.id}`, payload, {
        headers: this.getAdminHeaders()
      }).subscribe({
        next: () => {
          this.h3SuccessMessage = 'Banner updated.';
          this.h3EditingId = null;
          this.h3EditFile = null;
          this.h3EditFileName = '';
          this.loadHome3Banners();
          this.h3IsSaving = false;
        },
        error: err => {
          this.h3ErrorMessage = err?.error?.message || 'Failed to update banner.';
          this.h3IsSaving = false;
        }
      });
    }
    deleteHome3Banner(id) {
      if (!confirm('Delete this home3 banner?')) return;
      this.h3IsSaving = true;
      this.http.delete(`${this.home3BannersAdminUrl}/${id}`, {
        headers: this.getAdminHeaders()
      }).subscribe({
        next: () => {
          this.h3SuccessMessage = 'Banner deleted.';
          this.home3Banners = this.home3Banners.filter(b => b.id !== id);
          this.h3IsSaving = false;
        },
        error: err => {
          this.h3ErrorMessage = err?.error?.message || 'Failed to delete banner.';
          this.h3IsSaving = false;
        }
      });
    }
    h3ResetNewForm() {
      this.h3NewEyebrow = '';
      this.h3NewHeading = '';
      this.h3NewDescription = '';
      this.h3NewViewMoreUrl = '/shop';
      this.h3NewImageUrl = '';
      this.h3NewSortOrder = 0;
      this.h3NewIsActive = true;
      this.h3NewImageFile = null;
      this.h3NewImageFileName = '';
    }
    static {
      this.ɵfac = function SliderSettingsComponent_Factory(t) {
        return new (t || SliderSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SliderSettingsComponent,
        selectors: [["app-slider-settings"]],
        decls: 143,
        vars: 46,
        consts: [[1, "slider-settings"], [1, "page-head"], [1, "messages"], ["class", "message success", 4, "ngIf"], ["class", "message error", 4, "ngIf"], [1, "card"], [1, "display-count-row"], ["for", "displayCount"], ["id", "displayCount", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["type", "button", 3, "disabled", "click"], [1, "muted", 2, "margin-bottom", "1rem"], ["for", "autoplayInterval"], ["id", "autoplayInterval", 3, "ngModel", "ngModelChange"], [1, "form-grid"], ["type", "text", "placeholder", "Optional title", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Short description shown on banner", 3, "ngModel", "ngModelChange"], ["type", "url", "placeholder", "e.g. /shop or https://...", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", 3, "ngModel", "ngModelChange"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "upload-row"], ["type", "url", "placeholder", "https://...", 3, "ngModel", "ngModelChange"], ["type", "file", "accept", "image/png,image/jpeg", 3, "change"], ["class", "filename", 4, "ngIf"], ["type", "button", 1, "primary", 3, "disabled", "click"], ["class", "muted", 4, "ngIf"], ["class", "slider-item", 4, "ngFor", "ngForOf"], [1, "slider-settings", "h3-section"], ["type", "text", "placeholder", "e.g. NOURISH YOUR STYLE", 3, "ngModel", "ngModelChange"], [1, "req"], ["type", "text", "placeholder", "Main banner heading", 3, "ngModel", "ngModelChange"], [1, "full-col"], ["type", "text", "placeholder", "Optional short description", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "/shop or https://...", 3, "ngModel", "ngModelChange"], ["class", "h3-banner-item", 4, "ngFor", "ngForOf"], [1, "message", "success"], [1, "message", "error"], [1, "filename"], [1, "muted"], [1, "slider-item"], [3, "src", "alt"], [1, "item-fields"], ["type", "url", 3, "ngModel", "ngModelChange"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "item-actions"], ["type", "button", 1, "danger", 3, "disabled", "click"], [1, "h3-banner-item"], [1, "h3-preview-img", 3, "src", "alt"], ["type", "text", 3, "ngModel", "disabled", "ngModelChange"], ["type", "text", "placeholder", "Optional description", 3, "ngModel", "disabled", "ngModelChange"], ["type", "text", "placeholder", "/shop", 3, "ngModel", "disabled", "ngModelChange"], ["type", "url", 3, "ngModel", "disabled", "ngModelChange"], ["type", "number", "min", "0", 3, "ngModel", "disabled", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "disabled", "ngModelChange"], [4, "ngIf"], ["type", "button", 1, "success-btn", 3, "disabled", "click"]],
        template: function SliderSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "header", 1)(2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hero Slider Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Manage top slider images and choose how many should be displayed (2-5).");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SliderSettingsComponent_p_7_Template, 2, 1, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SliderSettingsComponent_p_8_Template, 2, 1, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "article", 5)(10, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Display Count");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Visible slider images:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_select_ngModelChange_15_listener($event) {
              return ctx.displayCount = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_Template_button_click_24_listener() {
              return ctx.saveDisplayCount();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "article", 5)(27, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Autoplay Speed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "How long each slide is shown before auto-advancing (1\u201315 seconds). Also controls the zoom animation duration.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 6)(32, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Slide duration:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_select_ngModelChange_34_listener($event) {
              return ctx.autoplayInterval = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "1 second");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "2 seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "3 seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "4 seconds (default)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "5 seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "6 seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "7 seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "8 seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "10 seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "12 seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "15 seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_Template_button_click_57_listener() {
              return ctx.saveAutoplayInterval();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "article", 5)(60, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Add Slider Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 14)(63, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_65_listener($event) {
              return ctx.newTitle = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Subtitle / Description ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_68_listener($event) {
              return ctx.newSubtitle = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Button Link (URL) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_71_listener($event) {
              return ctx.newCtaUrl = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Sort Order ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_74_listener($event) {
              return ctx.newSortOrder = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 19)(76, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_76_listener($event) {
              return ctx.newIsActive = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Active ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 21)(79, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Image URL ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_81_listener($event) {
              return ctx.newImageUrl = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Or Upload Image ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SliderSettingsComponent_Template_input_change_84_listener($event) {
              return ctx.onNewImageSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, SliderSettingsComponent_span_85_Template, 2, 1, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_Template_button_click_86_listener() {
              return ctx.addSliderItem();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Add Slider Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "article", 5)(89, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Slider Images");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, SliderSettingsComponent_p_91_Template, 2, 0, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, SliderSettingsComponent_div_92_Template, 26, 10, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, SliderSettingsComponent_p_93_Template, 2, 0, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "section", 28)(95, "header", 1)(96, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Home3 Promo Banners");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Manage the 3-column promo banner panels shown on the Noura-themed homepage (Home3).");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, SliderSettingsComponent_p_101_Template, 2, 1, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, SliderSettingsComponent_p_102_Template, 2, 1, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "article", 5)(104, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Add New Banner");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 14)(107, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " Eyebrow Label ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_109_listener($event) {
              return ctx.h3NewEyebrow = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " Heading ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_114_listener($event) {
              return ctx.h3NewHeading = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Description ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_117_listener($event) {
              return ctx.h3NewDescription = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, " View More Link (URL) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_120_listener($event) {
              return ctx.h3NewViewMoreUrl = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " Sort Order ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_123_listener($event) {
              return ctx.h3NewSortOrder = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "label", 19)(125, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_125_listener($event) {
              return ctx.h3NewIsActive = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " Active ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 21)(128, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " Image URL ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SliderSettingsComponent_Template_input_ngModelChange_130_listener($event) {
              return ctx.h3NewImageUrl = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, " Or Upload Image ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SliderSettingsComponent_Template_input_change_133_listener($event) {
              return ctx.onH3NewImageSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, SliderSettingsComponent_span_134_Template, 2, 1, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderSettingsComponent_Template_button_click_135_listener() {
              return ctx.addHome3Banner();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Add Banner ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "article", 5)(138, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Existing Banners");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, SliderSettingsComponent_p_140_Template, 2, 0, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, SliderSettingsComponent_div_141_Template, 28, 19, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, SliderSettingsComponent_p_142_Template, 2, 0, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.autoplayInterval);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 1000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 2000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 3000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 4000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 5000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 6000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 7000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 8000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 10000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 12000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 15000);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newSubtitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newCtaUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newSortOrder);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newIsActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newImageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newImageFileName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sliderItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.sliderItems.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.h3SuccessMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.h3ErrorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.h3NewEyebrow);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.h3NewHeading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.h3NewDescription);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.h3NewViewMoreUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.h3NewSortOrder);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.h3NewIsActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.h3NewImageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.h3NewImageFileName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.h3IsSaving);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.h3IsLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.home3Banners);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.h3IsLoading && !ctx.home3Banners.length);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.slider-settings[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n\n.page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #64748b;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #0f172a;\n}\n\n.display-count-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.upload-row[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  align-items: end;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  font-size: 0.9rem;\n  color: #1e293b;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 9px 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  border-radius: 8px;\n  background: #2563eb;\n  color: #fff;\n  padding: 9px 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\nbutton.danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  border-color: #dc2626;\n}\n\n.slider-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 180px 1fr auto;\n  gap: 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px;\n  margin-bottom: 10px;\n}\n\n.slider-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 120px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.item-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  align-self: end;\n}\n\n.item-actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  align-content: start;\n}\n\n.messages[_ngcontent-%COMP%] {\n  min-height: 22px;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n}\n\n.message.success[_ngcontent-%COMP%] {\n  color: #166534;\n}\n\n.message.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n\n.muted[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n\n.filename[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.85rem;\n}\n\n.req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n\n@media (max-width: 980px) {\n  .slider-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .slider-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 180px;\n  }\n  .item-fields[_ngcontent-%COMP%], .form-grid[_ngcontent-%COMP%], .upload-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .item-actions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.h3-section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 2px solid #e2e8f0;\n}\n.h3-section[_ngcontent-%COMP%]   .page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n\n.h3-banner-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr auto;\n  gap: 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px;\n  margin-bottom: 10px;\n}\n\n.h3-preview-img[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 120px;\n  object-fit: cover;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n\n.full-col[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\nbutton.success-btn[_ngcontent-%COMP%] {\n  background: #16a34a;\n  border-color: #16a34a;\n  color: #fff;\n}\n\n@media (max-width: 980px) {\n  .h3-banner-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .h3-preview-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2xpZGVyLXNldHRpbmdzL3NsaWRlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBOzs7RUFHRSxhQUFBO0FBQ0Y7O0FBRUE7O0VBRUUseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQUE7RUFDRjtFQUVBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFBRjtFQUdBOzs7SUFHRSwwQkFBQTtFQURGO0VBSUE7SUFDRSxnREFBQTtFQUZGO0FBQ0Y7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUpGO0FBTUU7RUFDRSxjQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRTtJQUNFLDBCQUFBO0VBTEY7RUFRQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBTkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGlkZXItc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE2cHg7XG59XG5cbi5wYWdlLWhlYWQgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuXG4ucGFnZS1oZWFkIHAge1xuICBtYXJnaW46IDZweCAwIDA7XG4gIGNvbG9yOiAjNjQ3NDhiO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jYXJkIGgzIHtcbiAgbWFyZ2luOiAwIDAgMTJweDtcbiAgY29sb3I6ICMwZjE3MmE7XG59XG5cbi5kaXNwbGF5LWNvdW50LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9ybS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEycHg7XG59XG5cbi51cGxvYWQtcm93IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzFlMjkzYjtcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG5idXR0b24ge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOXB4IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNTYzZWI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzI1NjNlYjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDlweCAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuYnV0dG9uLmRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNkYzI2MjY7XG4gIGJvcmRlci1jb2xvcjogI2RjMjYyNjtcbn1cblxuLnNsaWRlci1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxODBweCAxZnIgYXV0bztcbiAgZ2FwOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2xpZGVyLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uaXRlbS1maWVsZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTBweDtcbn1cblxuLmNoZWNrYm94LWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuLml0ZW0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1jb250ZW50OiBzdGFydDtcbn1cblxuLm1lc3NhZ2VzIHtcbiAgbWluLWhlaWdodDogMjJweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubWVzc2FnZS5zdWNjZXNzIHtcbiAgY29sb3I6ICMxNjY1MzQ7XG59XG5cbi5tZXNzYWdlLmVycm9yIHtcbiAgY29sb3I6ICNiOTFjMWM7XG59XG5cbi5tdXRlZCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi5maWxlbmFtZSB7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5yZXEge1xuICBjb2xvcjogI2RjMjYyNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gIC5zbGlkZXItaXRlbSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuc2xpZGVyLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG5cbiAgLml0ZW0tZmllbGRzLFxuICAuZm9ybS1ncmlkLFxuICAudXBsb2FkLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuaXRlbS1hY3Rpb25zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEhvbWUzIHByb21vIGJhbm5lciBzZWN0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmgzLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlMmU4ZjA7XG5cbiAgLnBhZ2UtaGVhZCBoMiB7XG4gICAgY29sb3I6ICM3YzNhZWQ7XG4gIH1cbn1cblxuLmgzLWJhbm5lci1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNjBweCAxZnIgYXV0bztcbiAgZ2FwOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaDMtcHJldmlldy1pbWcge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZnVsbC1jb2wge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG5idXR0b24uc3VjY2Vzcy1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMTZhMzRhO1xuICBib3JkZXItY29sb3I6ICMxNmEzNGE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLmgzLWJhbm5lci1pdGVtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5oMy1wcmV2aWV3LWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return SliderSettingsComponent;
})();

/***/ }),

/***/ 5064:
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ 6293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function UsersComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Manage system administrators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UsersComponent_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function UsersComponent_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.successMessage);
  }
}
function UsersComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading users\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_33_tr_20_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_33_tr_20_ng_container_14_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.requestDelete(user_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function UsersComponent_div_33_tr_20_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_33_tr_20_ng_container_15_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.confirmDelete(user_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_33_tr_20_ng_container_15_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.cancelDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function UsersComponent_div_33_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 36)(1, "td", 28)(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 30)(7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UsersComponent_div_33_tr_20_ng_container_14_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UsersComponent_div_33_tr_20_ng_container_15_Template, 7, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r7.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", user_r7.user_type === "super_admin" ? "super" : user_r7.user_type === "partner" ? "partner" : "regular");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r7.user_type === "super_admin" ? "Super Admin" : user_r7.user_type === "partner" ? "Partner" : "Admin", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.formatDate(user_r7.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.formatDate(user_r7.last_login));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.confirmDeleteId !== user_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.confirmDeleteId === user_r7.id);
  }
}
function UsersComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Registered Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26)(4, "table", 27)(5, "thead")(6, "tr")(7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "User Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Last Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UsersComponent_div_33_tr_20_Template, 16, 8, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 35)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Total: ", ctx_r4.users.length, " user", ctx_r4.users.length !== 1 ? "s" : "", "");
  }
}
function UsersComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No users found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
let UsersComponent = /*#__PURE__*/(() => {
  class UsersComponent {
    constructor(http) {
      this.http = http;
      this.apiUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.AUTH_API_URL;
      this.users = [];
      this.isLoading = false;
      this.errorMessage = '';
      this.successMessage = '';
      this.confirmDeleteId = null;
      this.newUserEmail = '';
      this.newUserPassword = '';
      this.newUserType = 'admin';
      this.isCreating = false;
    }
    ngOnInit() {
      this.loadUsers();
    }
    loadUsers() {
      this.isLoading = true;
      this.errorMessage = '';
      this.http.get(`${this.apiUrl}/users`).subscribe({
        next: data => {
          this.users = data || [];
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to load users.';
          this.isLoading = false;
        }
      });
    }
    createUser() {
      if (!this.newUserEmail.trim() || !this.newUserPassword) {
        this.errorMessage = 'Email and password are required';
        return;
      }
      this.isCreating = true;
      this.errorMessage = '';
      this.http.post(`${this.apiUrl}/register`, {
        email: this.newUserEmail.trim(),
        password: this.newUserPassword,
        userType: this.newUserType
      }).subscribe({
        next: () => {
          this.successMessage = 'User created successfully';
          this.newUserEmail = '';
          this.newUserPassword = '';
          this.newUserType = 'admin';
          this.isCreating = false;
          this.loadUsers();
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        error: err => {
          this.errorMessage = err.error?.error || 'Failed to create user';
          this.isCreating = false;
        }
      });
    }
    requestDelete(id) {
      this.confirmDeleteId = id;
    }
    cancelDelete() {
      this.confirmDeleteId = null;
    }
    confirmDelete(id) {
      this.http.delete(`${this.apiUrl}/users/${id}`).subscribe({
        next: () => {
          this.users = this.users.filter(u => u.id !== id);
          this.confirmDeleteId = null;
          this.successMessage = 'User deleted successfully';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        error: () => {
          this.errorMessage = 'Failed to delete user';
          this.confirmDeleteId = null;
        }
      });
    }
    formatDate(dateString) {
      if (!dateString) {
        return 'Never';
      }
      const date = new Date(dateString);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    clearError() {
      this.errorMessage = '';
    }
    static {
      this.ɵfac = function UsersComponent_Factory(t) {
        return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UsersComponent,
        selectors: [["app-users"]],
        decls: 35,
        vars: 14,
        consts: [[1, "users-page"], [1, "users-header"], [4, "ngIf"], [1, "users-card"], [1, "create-form"], [1, "form-row"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "placeholder", "admin@example.com", 3, "ngModel", "disabled", "ngModelChange", "focus"], ["for", "password"], ["id", "password", "type", "password", "placeholder", "Enter password", 3, "ngModel", "disabled", "ngModelChange", "focus"], ["for", "userType"], ["id", "userType", 3, "ngModel", "disabled", "ngModelChange"], ["value", "admin"], ["value", "super_admin"], ["value", "partner"], [1, "btn-create", 3, "disabled", "click"], ["class", "message error", 4, "ngIf"], ["class", "message success", 4, "ngIf"], ["class", "users-loading", 4, "ngIf"], ["class", "users-card", 4, "ngIf"], ["class", "users-empty", 4, "ngIf"], [1, "message", "error"], [1, "message", "success"], [1, "users-loading"], [1, "spinner"], [1, "table-wrap"], [1, "users-table"], [1, "col-id"], [1, "col-email"], [1, "col-type"], [1, "col-created"], [1, "col-login"], [1, "col-actions"], ["class", "user-row", 4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "user-row"], [1, "badge-id"], [1, "badge", 3, "ngClass"], [1, "btn-delete", 3, "click"], [1, "confirm-text"], [1, "btn-confirm-yes", 3, "click"], [1, "btn-confirm-no", 3, "click"], [1, "users-empty"]],
        template: function UsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Admin Users");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UsersComponent_p_4_Template, 2, 0, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Create New Admin User");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.newUserEmail = $event;
            })("focus", function UsersComponent_Template_input_focus_13_listener() {
              return ctx.clearError();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.newUserPassword = $event;
            })("focus", function UsersComponent_Template_input_focus_17_listener() {
              return ctx.clearError();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "User Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_select_ngModelChange_21_listener($event) {
              return ctx.newUserType = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Super Admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Partner");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_28_listener() {
              return ctx.createUser();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UsersComponent_p_30_Template, 2, 1, "p", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, UsersComponent_p_31_Template, 2, 1, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, UsersComponent_div_32_Template, 4, 0, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, UsersComponent_div_33_Template, 24, 3, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UsersComponent_div_34_Template, 3, 0, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newUserEmail)("disabled", ctx.isCreating);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newUserPassword)("disabled", ctx.isCreating);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newUserType)("disabled", ctx.isCreating);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isCreating);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isCreating ? "Creating..." : "Create User", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.users.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.users.length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
        styles: ["@charset \"UTF-8\";\n\n\n.users-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 28px 20px 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n\n.users-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n\n.users-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #64748b;\n}\n\n\n\n.users-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);\n}\n\n.users-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n\n\n.create-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 160px auto;\n  gap: 12px;\n  align-items: flex-end;\n}\n@media (max-width: 900px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 9px;\n  font-size: 0.9rem;\n  color: #0f172a;\n  background: #fff;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  background: #f1f5f9;\n  opacity: 0.6;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n\n.btn-create[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: #0f172a;\n  color: #fff;\n  border: 0;\n  border-radius: 9px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.12s;\n}\n.btn-create[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1e293b;\n}\n.btn-create[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n\n\n.message[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 0.88rem;\n}\n.message.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n.message.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n\n\n\n.users-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px 20px;\n  color: #64748b;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.user-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.12s;\n}\n.user-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.user-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  font-size: 0.9rem;\n  color: #0f172a;\n}\n\n\n\n.col-id[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.col-email[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.col-type[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.col-created[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n.col-login[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n.col-actions[_ngcontent-%COMP%] {\n  width: 180px;\n}\n\n\n\n.badge-id[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #eff6ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n  border-radius: 18px;\n  padding: 2px 10px;\n  font-weight: 700;\n  font-size: 0.78rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 18px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.badge.super[_ngcontent-%COMP%] {\n  background: #fefce8;\n  color: #b45309;\n  border: 1px solid #fde047;\n}\n.badge.regular[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n  border: 1px solid #bae6fd;\n}\n.badge.partner[_ngcontent-%COMP%] {\n  background: #ecfccb;\n  color: #3f6212;\n  border: 1px solid #bef264;\n}\n\n\n\n.col-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  border-radius: 7px;\n  padding: 5px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #b91c1c;\n  white-space: nowrap;\n}\n\n.btn-confirm-yes[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border: 0;\n  border-radius: 7px;\n  padding: 5px 10px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.btn-confirm-no[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #1e293b;\n  border: 0;\n  border-radius: 7px;\n  padding: 5px 10px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n\n\n.table-footer[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #e2e8f0;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n\n\n\n.users-empty[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 48px 20px;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.95rem;\n}\n.users-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLGdFQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFFRjs7QUFDQSxpRUFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0EsaUVBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBLGlFQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFFRjtBQUFFO0VBTkY7SUFPSSw4QkFBQTtFQUdGO0FBQ0Y7QUFERTtFQVZGO0lBV0ksMEJBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTs7RUFFRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBSUY7QUFGRTs7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFLSjtBQUZFOztFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBS0o7O0FBREE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFJRjtBQUZFO0VBQXlCLG1CQUFBO0FBSzNCO0FBSkU7RUFBYSxZQUFBO0VBQWMsbUJBQUE7QUFRN0I7O0FBTEEsaUVBQUE7QUFDQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFRRjtBQU5FO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFRSjtBQUxFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFPSjs7QUFIQSxpRUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTUY7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBTUY7O0FBSEE7RUFBa0I7SUFBSyx5QkFBQTtFQVFyQjtBQUNGO0FBUEEsaUVBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVNGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBU0Y7O0FBTkE7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0FBU0Y7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFTRjs7QUFOQTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUFTRjtBQVBFO0VBQWUsbUJBQUE7QUFVakI7QUFURTtFQUFVLG1CQUFBO0FBWVo7O0FBVEE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWUY7O0FBVEEsa0JBQUE7QUFDQTtFQUFjLFdBQUE7QUFhZDs7QUFaQTtFQUFjLGdCQUFBO0FBZ0JkOztBQWZBO0VBQWMsWUFBQTtBQW1CZDs7QUFsQkE7RUFBZSxZQUFBO0FBc0JmOztBQXJCQTtFQUFjLFlBQUE7QUF5QmQ7O0FBeEJBO0VBQWUsWUFBQTtBQTRCZjs7QUExQkEsaUVBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTZCRjs7QUExQkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBNkJGO0FBM0JFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUE2Qko7QUExQkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQTRCSjtBQXpCRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBMkJKOztBQXZCQSxpRUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUEwQkY7O0FBdkJBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUEwQkY7QUF4QkU7RUFBVSxtQkFBQTtBQTJCWjs7QUF4QkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBMkJGOztBQXhCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUEyQkY7O0FBeEJBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTJCRjs7QUF4QkEsaUVBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQTJCRjs7QUF4QkEsaUVBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEyQkY7QUF6QkU7RUFBSSxTQUFBO0FBNEJOIiwic291cmNlc0NvbnRlbnQiOlsiLyogw6LClMKAw6LClMKAw6LClMKAIFBhZ2Ugw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4udXNlcnMtcGFnZSB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjhweCAyMHB4IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIEhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi51c2Vycy1oZWFkZXIgaDEge1xuICBtYXJnaW46IDAgMCA2cHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzBmMTcyYTtcbn1cblxuLnVzZXJzLWhlYWRlciBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBDYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnVzZXJzLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNSk7XG59XG5cbi51c2Vycy1jYXJkIGgyIHtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQ3JlYXRlIGZvcm0gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uY3JlYXRlLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxNjBweCBhdXRvO1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufVxuXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZTI5M2I7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0LFxuLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgcGFkZGluZzogOXB4IDEycHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzNywgOTksIDIzNSwgMC4xKTtcbiAgfVxufVxuXG4uYnRuLWNyZWF0ZSB7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjEycztcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYmFja2dyb3VuZDogIzFlMjkzYjsgfVxuICAmOmRpc2FibGVkIHsgb3BhY2l0eTogMC42OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBNZXNzYWdlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5tZXNzYWdlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuXG4gICYuZXJyb3Ige1xuICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gICAgY29sb3I6ICNiOTFjMWM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcbiAgfVxuXG4gICYuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgICBjb2xvcjogIzE2NjUzNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xuICB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBMb2FkaW5nIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnVzZXJzLWxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDQ4cHggMjBweDtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzI1NjNlYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMC43cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBUYWJsZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi50YWJsZS13cmFwIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xufVxuXG4udXNlcnMtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLnVzZXJzLXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmU4ZjA7XG59XG5cbi51c2Vycy10YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnVzZXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xMnM7XG5cbiAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgfVxufVxuXG4udXNlcnMtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzBmMTcyYTtcbn1cblxuLyogQ29sdW1uIHdpZHRocyAqL1xuLmNvbC1pZCAgICAgeyB3aWR0aDogNjBweDsgfVxuLmNvbC1lbWFpbCAgeyBtaW4td2lkdGg6IDIwMHB4OyB9XG4uY29sLXR5cGUgICB7IHdpZHRoOiAxMjBweDsgfVxuLmNvbC1jcmVhdGVkIHsgd2lkdGg6IDE2MHB4OyB9XG4uY29sLWxvZ2luICB7IHdpZHRoOiAxNjBweDsgfVxuLmNvbC1hY3Rpb25zIHsgd2lkdGg6IDE4MHB4OyB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBCYWRnZXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYmFkZ2UtaWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XG4gIGNvbG9yOiAjMjU2M2ViO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgJi5zdXBlciB7XG4gICAgYmFja2dyb3VuZDogI2ZlZmNlODtcbiAgICBjb2xvcjogI2I0NTMwOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmRlMDQ3O1xuICB9XG5cbiAgJi5yZWd1bGFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBmMmZlO1xuICAgIGNvbG9yOiAjMDM2OWExO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYWU2ZmQ7XG4gIH1cblxuICAmLnBhcnRuZXIge1xuICAgIGJhY2tncm91bmQ6ICNlY2ZjY2I7XG4gICAgY29sb3I6ICMzZjYyMTI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JlZjI2NDtcbiAgfVxufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQWN0aW9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5jb2wtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5idG4tZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbiAgY29sb3I6ICNiOTFjMWM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNmZWNhY2E7IH1cbn1cblxuLmNvbmZpcm0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2I5MWMxYztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJ0bi1jb25maXJtLXllcyB7XG4gIGJhY2tncm91bmQ6ICNkYzI2MjY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tY29uZmlybS1ubyB7XG4gIGJhY2tncm91bmQ6ICNlMmU4ZjA7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBUYWJsZSBmb290ZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4udGFibGUtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjNjQ3NDhiO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgRW1wdHkgc3RhdGUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4udXNlcnMtZW1wdHkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA0OHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcblxuICBwIHsgbWFyZ2luOiAwOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return UsersComponent;
})();

/***/ })

}]);
//# sourceMappingURL=911.js.map