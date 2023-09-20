"use strict";(self.webpackChunkdiscoveries_and_memories=self.webpackChunkdiscoveries_and_memories||[]).push([[5987],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=d(t),m=a,g=l["".concat(p,".").concat(m)]||l[m]||u[m]||i;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[l]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={},s="API Client",o={unversionedId:"library/services/api_client",id:"library/services/api_client",title:"API Client",description:"Package//pub.dev/packages/dio",source:"@site/docs/library/services/03_api_client.mdx",sourceDirName:"library/services",slug:"/library/services/api_client",permalink:"/docs/library/services/api_client",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/library/services/03_api_client.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutter Local Storage",permalink:"/docs/library/services/local_storage"},next:{title:"Custom DropdownButton",permalink:"/docs/library/widgets/custom_dropdown_button"}},p={},d=[{value:"Description Methods",id:"description-methods",level:2},{value:"Abstract class",id:"abstract-class",level:2},{value:"Error Class",id:"error-class",level:2},{value:"Implementation Class",id:"implementation-class",level:2}],c={toc:d},l="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-client"},"API Client"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Package: ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/dio"},"https://pub.dev/packages/dio"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Implementation Date: AGO/23"),(0,a.kt)("p",{parentName:"admonition"},"Version: 5.3.2")),(0,a.kt)("h2",{id:"description-methods"},"Description Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"get;"),(0,a.kt)("li",{parentName:"ul"},"post;"),(0,a.kt)("li",{parentName:"ul"},"delete;"),(0,a.kt)("li",{parentName:"ul"},"patch;"),(0,a.kt)("li",{parentName:"ul"},"put;")),(0,a.kt)("h2",{id:"abstract-class"},"Abstract class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"\nabstract class MyApiClient {\n  Future<ClientResponse> get({\n    required String path,\n    Map<String, dynamic>? queryParams,\n    Map<String, dynamic>? headers,\n  });\n\n  Future<ClientResponse> post({\n    required String path,\n    Map<String, dynamic>? queryParams,\n    Map<String, dynamic>? data,\n    Map<String, dynamic>? headers,\n  });\n\n  Future<ClientResponse> delete({\n    required String path,\n    required Map<String, dynamic> data,\n    Map<String, dynamic>? headers,\n  });\n\n  Future<ClientResponse> patch({\n    required String path,\n    required Map<String, dynamic> data,\n    Map<String, dynamic>? headers,\n  });\n\n  Future<ClientResponse> put({\n    required String path,\n    required Map<String, dynamic> data,\n    Map<String, dynamic>? headers,\n  });\n}\n\nclass ApiHeader {\n  final Map<String, dynamic> data;\n  const ApiHeader({\n    required this.data,\n  });\n}\n")),(0,a.kt)("h1",{id:"response-class"},"Response Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"\nclass ClientResponse {\n  final dynamic data;\n  final int statusCode;\n\n  const ClientResponse({\n    required this.data,\n    required this.statusCode,\n  });\n\n  @override\n  String toString() => 'ClientResponse(data: $data, statusCode: $statusCode)';\n}\n")),(0,a.kt)("h2",{id:"error-class"},"Error Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"\nclass HttpServiceError extends Failure {\n  final String message;\n  final StackTrace? stackTrace;\n  HttpServiceError({required this.message, this.stackTrace});\n}\n\n\n")),(0,a.kt)("h2",{id:"implementation-class"},"Implementation Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"\nclass MyApiClientDio implements MyApiClient {\n  final Dio _dio;\n\n  MyApiClientDio(this._dio) {\n    _dio.options.baseUrl = 'https://api.chucknorris.io/jokes';\n  }\n\n  @override\n  Future<ClientResponse> get({\n    required String path,\n    Map<String, dynamic>? queryParams,\n    Map<String, dynamic>? headers,\n  }) async {\n    try {\n      final response = await _dio.get(\n        path,\n        options: Options(headers: headers),\n        queryParameters: queryParams,\n      );\n      return ClientResponse(\n          data: response.data, statusCode: response.statusCode!);\n    } on DioException catch (e, s) {\n      log(e.toString());\n      log(s.toString());\n      throw HttpServiceError(message: e.toString(), stackTrace: s);\n    }\n  }\n\n  @override\n  Future<ClientResponse> post({\n    required String path,\n    Map<String, dynamic>? queryParams,\n    Map<String, dynamic>? data,\n    Map<String, dynamic>? headers,\n  }) async {\n    try {\n      final response = await _dio.post(\n        path,\n        data: data,\n        queryParameters: queryParams,\n        options: Options(\n          headers: headers,\n        ),\n      );\n      return ClientResponse(\n          data: response.data, statusCode: response.statusCode!);\n    } on DioException catch (e, s) {\n      log(e.toString());\n      log(s.toString());\n      throw HttpServiceError(message: e.toString(), stackTrace: s);\n    }\n  }\n\n  @override\n  Future<ClientResponse> delete({\n    required String path,\n    required Map<String, dynamic> data,\n    Map<String, dynamic>? headers,\n  }) async {\n    try {\n      final response = await _dio.delete(path,\n          data: data, options: Options(headers: headers));\n      return ClientResponse(\n          data: response.data, statusCode: response.statusCode!);\n    } on DioException catch (e, s) {\n      log(e.toString());\n      log(s.toString());\n      throw HttpServiceError(message: e.toString(), stackTrace: s);\n    }\n  }\n\n  @override\n  Future<ClientResponse> patch({\n    required String path,\n    required Map<String, dynamic> data,\n    Map<String, dynamic>? headers,\n  }) async {\n    try {\n      final response = await _dio.patch(path,\n          data: data, options: Options(headers: headers));\n      return ClientResponse(\n          data: response.data, statusCode: response.statusCode!);\n    } on DioException catch (e, s) {\n      log(e.toString());\n      log(s.toString());\n      throw HttpServiceError(message: e.toString(), stackTrace: s);\n    }\n  }\n\n  @override\n  Future<ClientResponse> put({\n    required String path,\n    required Map<String, dynamic> data,\n    Map<String, dynamic>? headers,\n  }) async {\n    try {\n      final response =\n          await _dio.put(path, data: data, options: Options(headers: headers));\n      return ClientResponse(\n          data: response.data, statusCode: response.statusCode!);\n    } on DioException catch (e, s) {\n      log(e.toString());\n      log(s.toString());\n      throw HttpServiceError(message: e.toString(), stackTrace: s);\n    }\n  }\n}\n\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Contribuitor: BrAcInhO")))}u.isMDXComponent=!0}}]);