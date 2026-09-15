import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-CMAH2_mE.mjs';
import { _ as _sfc_main$1, l as loadingBar_default, a as _sfc_main$1$1 } from './toggleLang-no6N0L3k.mjs';
import { resolveComponent, withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-i18n';
import 'unhead/utils';

//#region assets/images/banner-images/jojo.webp
var jojo_default = __buildAssetsURL("jojo.BJzrhtt7.webp");
//#endregion
//#region assets/images/logos/banner.webp
var banner_default = __buildAssetsURL("banner.DlYmsZ4u.webp");
//#endregion
//#region assets/images/banner-images/food-delivery.webp
var food_delivery_default = __buildAssetsURL("food-delivery.YY8uPq2N.webp");
//#endregion
//#region assets/images/logos/lgo.png
var lgo_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA4AQMAAACMgZnuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAGUExURcoCAPuzABmttjcAAABYSURBVBjTY2AYcMDDcABM2zN/ANPFzBZgOrFNAkw/PCcDpg+e4wFRjAfe8EHoPyg0c8MfdghdAaV/oPEhNDuQbsBPM4NpBnS+ApTPAOYPEIBYzcLgAKY5ABC8Hxco+I+9AAAAAElFTkSuQmCC";
//#endregion
//#region assets/images/banner-images/style.webp
var style_default = __buildAssetsURL("style.BwdSu5qA.webp");
//#endregion
//#region assets/images/logos/style-logo.png
var style_logo_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABWAQMAAAD2YCoBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAGUExURf///ygvT5fjoEoAAAAbSURBVDjLY2AAA/n/YNDAMMod5Y5yR7kjjwsA1Bs3hYOth/8AAAAASUVORK5CYII=";
//#endregion
//#region assets/images/banner-images/limoo.webp
var limoo_default = __buildAssetsURL("limoo.MNWE6hg0.webp");
//#endregion
//#region assets/images/logos/limoo-logo.png
var limoo_logo_default = __buildAssetsURL("limoo-logo.CfANh035.png");
//#endregion
//#region assets/images/banner-images/nftImage.webp
var nftImage_default = __buildAssetsURL("nftImage.BpcVq2y4.webp");
//#endregion
//#region assets/images/logos/nftLogo.webp
var nftLogo_default = "data:image/webp;base64,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";
//#endregion
//#region assets/images/banner-images/juniper.webp
var juniper_default = __buildAssetsURL("juniper.7qgOcPdy.webp");
//#endregion
//#region assets/images/logos/juniperLogo.webp
var juniperLogo_default = "data:image/webp;base64,UklGRsAOAABXRUJQVlA4ILQOAACwRwGdASoABAAEP/3+/3+/vD+yIPRoY/A/iWlu/HA5F9UQUOvmE0oLNr86YH+7h1Ae/5seLADevF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq7O1yuqausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMzk6pq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxemmrrMvF6aausy8Xppq6zLxeU4Yqx8wjsAG5wz5XVNXWZeL001dZl4vTTV1mXi9NNXWFAKBwol3pgk9Ep5xaw2tlz8KzLxemmrrMvF6aausy8Xppq6zLq0DhP5fZqecBdP70V4mQz8MX7cw3Kh+3L9uYcKF9cLnGjegxpfgGCQuCc31PMvGNHeCheOv/qjMftzDcqH7cv25uXVNXWcBdXWXtBEPMvF6aausy8XlPe4IXCX7cw3Kh+3L9/1TV1mXi9NL8BiY01dZl4vTTXrrL7KAFr4H7cv25huVECF9uX8WOVD9vKk0RtzDc5yeZeL4CGaUgg9iwapwCdrmG5UP25ft51zDcqH7cv25FKbeVQvty/bmG5UP25ftzDc5qq4fhAQl+3MNyoft5Zy/bmG5UP21t0n77bcv25huVcHBQiOwZqgFUhK/bn34Vay9D9uX7cw3OHK36X7cw3KOiSicUD9uXiwP96p+GdlD1xjsWeSRHrzpWpEOtCD9uX7Om4vnv+euYblQ/bmBL+3MNyofvrBWy2y5FbmGqAACNSNgR4LstuYfpevOgcrhsooHZS/fjVIX7p+3L9uYbnDlQ/bl+3MIOavAGKB+3Iag+MNubltLgkiCow9fivwAuX7cqgL9wKH76sLY0wkuX7cw3KuKB+3L9ubTj3T8lNRhwaDnAbImOuYcKbMYuJdM7FuYF6rLbsljKh+2tulcJQP25ftzajDcqH7cvg5q80PcqH6Dgs5QCw1L9uYD9ZjnI3BpfzhODeTz9sH7gauvnMvJP25ftzErDcqH7cv1kEpUblQ/bI3UM4Eotl+3MSo40Y09PYiErOlwP4pRRtS0kNyoftzVTBiNyogQmQfty/UjNqq3L9uYblQKFIppJSeNzCi/EzbyQ3Kh+3MCX9uYblQ+DkvIuX7cwhCC+DlQ/bl+3MC3IdHO/fl/EbagJITLKV3ZDMI33XIqrj3RCTUBJ/G73Kh+3NVL9uYblQn9cmofty+YB71H+R7cw3Kh++u+0ND3exfYgvZeTyBA7iZtVg0RQP25ft51zDcqH7ao37Ty25fth6EGyl+39FQ/bl+3nXMCACtmf3S+9SjToP5/RW/SydrmG5UP3125ftzDchun7cmAiWFv25huVD9uX7cxKxKgcVLMkmzWIVVFhJLBiNUc0fNuX7cw4N3Kh+3L9mGIA/QfNaZqBftzDcqH7cv29Nf4G/psdrAxQqRnwVh2oGTtcw3Kh++u36cw3KhpWGG4bVVuX7cw3Kh+jAZrKQ41Uv25hhKJ9isz2iKX6WTtcw3Kh++u3L9uYbkZet5xThPtxcv25huVD9F12g13oGMXEzVY2TyB+3lTnokupK28kNyoftzAl/bmG5UPsmDnCWIgUYjcqH7cv25gEyAGoJ4qx8Z8rYEtz3Kh+2onh+Tb6Wb65UP25gS/tzDcqHzMxhuBL1+m9v4YblQ/bl+g4Ozq8blHoFnptFsX3Ll+3MNJxJjEUmbPa4L7lQ/bl+/K3MNyofq7KUhhuEIJHK33wquftzDcqHiwXsqXMEUdBlPnpiNzDcqAXxY2pDljkTOW7EOg8xcqH7cv1YWl1HKgDF81aiNxBjqX7cw3AfTs0OV/zSlOIC3yTRUeX7cwBEfKnQDDcdzmG5UP28s5zWG5UP1Ax/TyeRwZ0c6JXazefs/SfDOzuTdncm7Ig32MiF56n7cvCVsiQZ03Z3JuzuTdkA7TR2oHuPpUV1xtBxW5FbmG5UQIWQyRuVcTm1ZMqY1Op1I42G9vOuYYS34ZuHSrigfEgxGC+Q4ULqmoBuVD9uX6n+g4AXNcm/b6nhjOQw3Kh618ECeEcUD32BouGmv7cw4N3Kh+3L9uVWSK/W2i2X78rcw1Du0bUYaOT6kOMCxnlnKKNiIOubUYblRUA/bl+3MNxAM6XA/bl+3MNwAEFSQ0P25CiZBAnhHE2CQpgLGcv25tRhuVD9uc45z4vstsNyofty/bdSABXP+5AafKLqmrW861+WZWnX9ubUYblRUBBZ9uYbog+qhzq7vtuX7cw4NWjAADLxYWETyB4bmcvvcqH7afKwsF9Byoq5Soft5Zy/bmG5XBKs6bVpAfCW5A/bl+3NqqRQrKjJX7cw1QRF7H7c2r0VD99duX7cw3KiBBwEWe0vUYblb9L9/tnz+36cw3KOiSXZUYgQIbz5/bl+/K3MNyoft5Z5YAMsEbmLUftzVS/bmLUftyYHgGIblQ/byzl+3NqMNyofty/bzrlypgggDFf1v6KjJX8WOVD+Jm5MCoeGpft6a/tzDg3cqH7cv286865QcpwLO/TmsOQ7b9OYblQ9QOEx+3MWo/iZ+VuYcG7og3L9uYbnDlRT+VMnaQalsCIQ3Oaw5DtuX6gGCV0v25huWAo5+3MODdyofty/bzrmG5VxwxDU0c0nI9yNK3YBhuiDeVqjU5eJ8iqDcqILPvytzDc4cqH7cv25hwnRiVhuJ3wFiwFA0XnRjSVkrMDNy0ARVjiBRU8QqDcqILQWM5ftzajDcqH7cwJgJf2865huOJAD06QXozKh++u3L9uYtSBC+36c2ow3Kh+3L9vTw1oAKB+3MCzz+3L9uYblQ/cF5etBPy/bm1GG5UP25zjrm1GJWG5UP25qsvSFINy/bmG5UP4mbzrmG5VxQZK/bmHIdv2AgTwgfty/bn7tDbHKNyofty/ix0QfsA/bmBL+3MNyogtqmql+/K3MNyoft+nMNyofty/b/A7iZvOuYblXFA/bl+3MNzmsOE6MNyoftzBiNyofty/bmLZ/F4KuUqH7eWcv25huVFQECF99duX7cw3K36X7cw3Kh+36f0VECF9uX78rcw3Kh+3MCxnNcm3L9uYblb9L9uYblQ/b9OYbnNYblRAhfbl+3MNzhzhyoqAfty/bmHIdt+nMN0QbmDEblRAhfbl+/K39FQ/bl+3pr+/2l+3MNyogs+39FQ/iZuYtR+3Ncm3L9vOuYblQ/bmqmBL+/K3MNyoft+nMWo/bnNYbog3L9vOv6KiBC+3L9uYblRVylXmLlQ/bl+39FRkr9udqB/FEJuVeYyHbcvAAD+wb/8fbaO59J6wTLIKSJAgACkoAAKACAAAAAAAAAAAAAEwKAAAAAAHJCAAAAAAAE4i61kLn5vZvyTUABirmrQHYBZ9hf4d+XOgy9LA9S6owTBihGcO+nSrys+wY69d57wlEuXt5AFe0XQ0CpC3HVnwWTWFipHkVn+kbX4xmzLLrx4FQEQi8LYDTX4x8xkyIM4HflsMGElRROhoBj5jhhAgSwENJ0MbbhFMKAWpdHQqzCPVjcNL4udHAdQys/G3vO4wpDyFtVq5Y470Ok4HNa67RFmdUeZlk9LeL67mhdT4rlipKhlvOoz4aXxhx6+TtoSzUYriuAILrLvRfWtsr9W+G+3v7Epq4hg/ZYV8XuAcUAPliIhlrJQfZC7zKZNk1uypgTf7iaHGwCfzQG5Hu0BpH20aeCVuo4CJpxIS1IT41hQpQhjUD3Edv65I+N+28HL6ABapoAsafWgPX/Z/V1su8xsAszpSt/abBQ70gQYKIf4j+wvjGNyThMlIG3t4Y4xshMBAlB7QF4wpkRnecim37zvXZ7r0frVxLkIh55MXAhgjFDVFfDTAHVfC07+qW2iN+LuWQK05NMQNlq1GLVLhAh2YSEOhnjv7rKv1b27c3Ch1XDtsKQNokvf4LICA4uNgBLMwTyLsW3CRtANviKhBzawPbGTx2KjAz4BCO4iCM4D+UQ9hZi1a1Ajd50xpZrEvGihb0cDV3z14sFHeP368wNw2iIf9lW+OJf3c4DUCuvZauQr51IH6AAwIrbf224RBO8v0d6jyu/4Xb1bRv4E/MiMfzrwjJjgxebOq/9+bKTFmWlVwNWwO8N4G+MogSn9y9ONY2mu0hKv+7m5+Z5Oqxs04xkTBOgjd9gxNMxhWAqs0o9cY6OdIdZUjgfPPvvbjx+web6KN4ZLPPxPUu8wbIMm5SuUKS0DZ3SSGLP98/AubyJzS7SlMC9fX2E9RarNqx/peWddvUavimDOeZ0xOmjs0YOBdXGJZPuwRYKecnNZrDPTIPRXPT10ryqjiD5AxMkopm+4nIrjK4IziSZy9BQZUFzCWZDqLLH3Bcptsh54kBFz3YcMofcCgIxM372MG1+wEKrkcHBoAm7LMXIBX590P81Ho3v0ojVRAH1+/tVAJeVHU2Q/dLTbQR4K40LHK2+Lib/SvgnGgU9Jd+chWP4R0Pz5p6tP+WOoxRfqKBbZcmrhVjztt/QzGzp8Fr6g0Sy6CQlsFbt1JXvUE48IqhfH0Kmp/vkOIEYcC9NtJOD7SxrTBtQKdP6qkoN3YsUmo0x55o51wgduZSDkZJQR28eYPbUdJORe+9WskSdY7MYGBqNTcX2W1u9H8iSnxKP36ear3BnQnU5m5XpnSPJpCQOlMWSEL0G0vhS1smTqBoNizSuq0PNVrxaCgAYSH4FErK6uK418iK+tJkY8a6S8pp2DrCR8OOPinIrjOicSEc685a+L9WU5DX86P4TS3HIEYMSAdsOb4LHLfTfSsADZmSaCmHYAAO70HFAAAA==";
//#endregion
//#region assets/images/banner-images/odo.webp
var odo_default = __buildAssetsURL("odo.DlP1441N.webp");
//#endregion
//#region assets/images/banner-images/odoLogo.png
var odoLogo_default = __buildAssetsURL("odoLogo.DZuCM_aI.png");
//#endregion
//#region pages/projects.vue
var _sfc_main = {
	data() {
		return {
			bestProjects: [
				{
					name: "JoJo Portfolio",
					desc: "professional portfolio",
					hrefs: "https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html",
					image: jojo_default,
					descImage: banner_default,
					star: 5
				},
				{
					name: "Food Delivery",
					desc: "online mac donald",
					hrefs: "https://mohamad-mobin.github.io/foods-delivery/",
					image: food_delivery_default,
					descImage: lgo_default,
					star: 5
				},
				{
					name: "Style Shop",
					desc: "online clothes shop",
					hrefs: "https://mohamad-mobin.github.io/Style-Shop/public/index.html",
					image: style_default,
					descImage: style_logo_default,
					star: 5
				},
				{
					name: "Limoo Site",
					desc: "iranian limoo site",
					hrefs: "https://mohamad-mobin.github.io/limoo-site/public/index.html",
					image: limoo_default,
					descImage: limoo_logo_default,
					star: 4
				}
			],
			vueProjects: [
				{
					name: "NFT marketplace",
					desc: "the nft marketplace site",
					hrefs: "https://vue-nft-marketplace.netlify.app/",
					image: nftImage_default,
					descImage: nftLogo_default,
					star: 5
				},
				{
					name: "Odo file manager",
					desc: "file manager of odo",
					hrefs: "https://cloud.odoteam.ir",
					image: odo_default,
					descImage: odoLogo_default,
					star: 5
				},
				{
					name: "Juniper",
					desc: "weather site",
					hrefs: "https://junipers.netlify.app/",
					image: juniper_default,
					descImage: juniperLogo_default,
					star: 4
				}
			],
			imageStatus: false
		};
	},
	methods: {
		FalseImageStatus() {
			this.imageStatus = false;
		},
		TrueImageStatus() {
			this.imageStatus = true;
		}
	},
	components: {
		Cursor: _sfc_main$1$1,
		loadingBar: loadingBar_default,
		toggleLang: _sfc_main$1
	},
	setup() {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Cursor = resolveComponent("Cursor");
	const _component_loadingBar = resolveComponent("loadingBar");
	const _component_toggleLang = resolveComponent("toggleLang");
	const _component_NuxtLink = NuxtLink;
	_push(`<!--[-->`);
	_push(ssrRenderComponent(_component_Cursor, { propsImageStatus: $data.imageStatus }, null, _parent));
	_push(ssrRenderComponent(_component_loadingBar, null, null, _parent));
	_push(ssrRenderComponent(_component_toggleLang, null, null, _parent));
	_push(`<div class="flex w-full justify-center items-center h-screen" data-v-67416007><div class="container absolute size-full flex flex-col lg:pl-16 xl::pl-20" data-v-67416007><div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="flex justify-center items-center pt-10" data-v-67416007><div class="relative pb-26 text-center" data-v-67416007><p id="myProjects" class="absolute text-4xl md:text-5xl w-100 justify-center items-center top-[19px] md:top-5 left-1/2 flex gap-x-2 transform -translate-x-1/2" data-v-67416007><span class="text-white bestParagraph" data-v-67416007>Vue &amp; Nuxt</span><span class="text-[#FFB400]" data-v-67416007>js</span></p><p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2 md:opacity-70" data-v-67416007>Vue</p></div></div><div class="flex gap-15 flex-wrap justify-center items-center gap-y-20 pt-16" data-v-67416007><!--[-->`);
	ssrRenderList($data.vueProjects, (project, index) => {
		_push(`<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="0" data-aos-duration="1300" class="bg-[#1E1F26] select-none w-72 h-56 rounded-2xl relative duration-300 group text-white ring-1 ring-[#3a3a3d] shadow" data-v-67416007><div class="absolute -left-5 -top-10 duration-300" data-v-67416007><a class="block overflow-hidden w-72 h-48 rounded-2xl cursor-none" target="_blank"${ssrRenderAttr("href", project.hrefs)} data-v-67416007><img draggable="false" class="size-full object-cover rounded-2xl ring-1 ring-[#3a3a3d] md:grayscale-100 group-hover:grayscale-0 duration-300 group-hover:scale-110 portofolio-item"${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.name)} data-v-67416007></a><div class="flex items-center justify-between pt-1" data-v-67416007><div class="flex justify-start items-center group-hover:ml-7 duration-300" data-v-67416007><div data-v-67416007><img draggable="false" class="size-10 inline-block bg-white rounded-[5px] mr-3 mt-2"${ssrRenderAttr("src", project.descImage)} alt="" data-v-67416007></div><div data-v-67416007><a${ssrRenderAttr("href", project.hrefs)} class="block pt-2 font-bold duration-300 w-full" data-v-67416007>${ssrInterpolate(project.name)}</a><a${ssrRenderAttr("href", project.hrefs)} class="block text-[#8d8d8d] text-xs duration-300 w-full" data-v-67416007>${ssrInterpolate(project.desc)}</a></div></div><ul class="flex relative top-3 text-yellow-300" data-v-67416007><!--[-->`);
		ssrRenderList(project.star, (n) => {
			_push(`<li data-v-67416007><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4" data-v-67416007><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" data-v-67416007></path></svg></li>`);
		});
		_push(`<!--]--></ul></div></div></div>`);
	});
	_push(`<!--]--></div><div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="flex justify-center items-center pt-10" data-v-67416007><div class="relative pb-26 text-center" data-v-67416007><p id="myProjects" class="absolute text-4xl md:text-5xl top-[19px] md:top-5 left-1/2 flex gap-x-2 transform -translate-x-1/2" data-v-67416007><span class="text-white bestParagraph whitespace-nowrap" data-v-67416007>Best</span><span class="text-[#FFB400] whitespace-nowrap" data-v-67416007>Vanilla Js</span></p><p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2 md:opacity-70" data-v-67416007>Vanilla</p></div></div><div class="flex gap-15 flex-wrap pb-30 justify-center items-center gap-y-20 pt-16" data-v-67416007><!--[-->`);
	ssrRenderList($data.bestProjects, (project, index) => {
		_push(`<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="0" data-aos-duration="1300" class="bg-[#1E1F26] select-none w-72 h-56 rounded-2xl relative duration-300 group text-white ring-1 ring-[#3a3a3d] shadow" data-v-67416007><div class="absolute -left-5 -top-10 duration-300" data-v-67416007><a class="block overflow-hidden w-72 h-48 rounded-2xl cursor-none" target="_blank"${ssrRenderAttr("href", project.hrefs)} data-v-67416007><img draggable="false" class="size-full object-cover rounded-2xl ring-1 ring-[#3a3a3d] md:grayscale-100 group-hover:grayscale-0 duration-300 group-hover:scale-110 portofolio-item"${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.name)} data-v-67416007></a><div class="flex items-center justify-between pt-1" data-v-67416007><div class="flex justify-start items-center group-hover:ml-7 duration-300" data-v-67416007><div data-v-67416007><img draggable="false" class="size-10 inline-block bg-white rounded-[5px] mr-3 mt-2"${ssrRenderAttr("src", project.descImage)} alt="" data-v-67416007></div><div data-v-67416007><a${ssrRenderAttr("href", project.hrefs)} class="block pt-2 font-bold duration-300 w-full" data-v-67416007>${ssrInterpolate(project.name)}</a><a${ssrRenderAttr("href", project.hrefs)} class="block text-[#8d8d8d] text-xs duration-300 w-full" data-v-67416007>${ssrInterpolate(project.desc)}</a></div></div><ul class="flex relative top-3 text-yellow-300" data-v-67416007><!--[-->`);
		ssrRenderList(project.star, (n) => {
			_push(`<li data-v-67416007><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4" data-v-67416007><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" data-v-67416007></path></svg></li>`);
		});
		_push(`<!--]--></ul></div></div></div>`);
	});
	_push(`<!--]--></div></div></div><div class="md:fixed hidden md:flex justify-end items-center md:w-20 md:h-screen h-20 w-full right-5 top-0 font-poppins" data-v-67416007><ul class="flex md:flex-col gap-y-10 font-poppins py-7 px-7 justify-center items-center shadow-xl rounded-4xl bg-[#222121] text-white h-fit" data-v-67416007>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/",
		id: "homeIcon",
		class: "flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] relative z-50 shadow-xs shadow-[#FFB400]"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-67416007${_scopeId}><path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-67416007${_scopeId}></path></svg>`);
			else return [(openBlock(), createBlock("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none"
			}, [createVNode("path", {
				d: "M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z",
				stroke: "white",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})]))];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/about",
		id: "homeIcon",
		class: "flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] relative z-50 shadow-xs shadow-[#FFB400]"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-67416007${_scopeId}><path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-67416007${_scopeId}></path></svg>`);
			else return [(openBlock(), createBlock("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none"
			}, [createVNode("path", {
				d: "M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z",
				stroke: "#ffffff",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})]))];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/projects",
		id: "homeIcon",
		class: "secondAboutIcon flex justify-center items-center bg-[#FFB400] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] z-50"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-67416007${_scopeId}><path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-67416007${_scopeId}></path></svg>`);
			else return [(openBlock(), createBlock("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none"
			}, [createVNode("path", {
				d: "M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z",
				stroke: "#ffffff",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})]))];
		}),
		_: 1
	}, _parent));
	_push(`</ul></div><div class="fixed text-white md:hidden flex justify-center items-center md:w-52 md:h-screen h-20 w-full right-0 bottom-0 z-40 rounded-tr-2xl rounded-tl-2xl" data-v-67416007><ul class="projectNavBar flex md:flex-col justify-end items-center gap-x-5 bg-[#252525] px-4 py-3 rounded-2xl" data-v-67416007>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/",
		id: "homeIcon",
		class: "flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] relative z-50 shadow-xs shadow-[#FFB400]"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-67416007${_scopeId}><path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-67416007${_scopeId}></path></svg>`);
			else return [(openBlock(), createBlock("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none"
			}, [createVNode("path", {
				d: "M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z",
				stroke: "white",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})]))];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/about",
		id: "homeIcon",
		class: "flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-67416007${_scopeId}><path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-67416007${_scopeId}></path></svg>`);
			else return [(openBlock(), createBlock("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none"
			}, [createVNode("path", {
				d: "M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z",
				stroke: "#ffffff",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})]))];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "/projects",
		id: "homeIcon",
		class: "secondProjectHomeIcon flex justify-center items-center bg-[#FFB400] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] z-50"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-67416007${_scopeId}><path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-67416007${_scopeId}></path></svg>`);
			else return [(openBlock(), createBlock("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none"
			}, [createVNode("path", {
				d: "M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z",
				stroke: "#ffffff",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			})]))];
		}),
		_: 1
	}, _parent));
	_push(`</ul></div><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var projects_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-67416007"]]);

export { projects_default as default };
//# sourceMappingURL=projects-CaJn4rHv.mjs.map
