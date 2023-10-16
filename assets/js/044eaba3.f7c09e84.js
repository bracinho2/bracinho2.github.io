"use strict";(self.webpackChunkdiscoveries_and_memories=self.webpackChunkdiscoveries_and_memories||[]).push([[2829],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>g});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=o.createContext({}),s=function(t){var e=o.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=s(t.components);return o.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),m=s(n),p=a,g=m["".concat(d,".").concat(p)]||m[p]||u[p]||r;return n?o.createElement(g,i(i({ref:e},l),{},{components:n})):o.createElement(g,i({ref:e},l))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var d in e)hasOwnProperty.call(e,d)&&(c[d]=e[d]);c.originalType=t,c[m]="string"==typeof t?t:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2549:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},i="Custom BottomBar with Badge Icon",c={unversionedId:"library/widgets/custom_bottom_bar",id:"library/widgets/custom_bottom_bar",title:"Custom BottomBar with Badge Icon",description:"Pode ser utilizado com ENUM ou com Entidades;",source:"@site/docs/library/widgets/02_custom_bottom_bar.mdx",sourceDirName:"library/widgets",slug:"/library/widgets/custom_bottom_bar",permalink:"/docs/library/widgets/custom_bottom_bar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/library/widgets/02_custom_bottom_bar.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom DropdownButton",permalink:"/docs/library/widgets/custom_dropdown_button"},next:{title:"SOLID in a Real World",permalink:"/docs/solid_in_a_real_world/intro"}},d={},s=[],l={toc:s},m="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-bottombar-with-badge-icon"},"Custom BottomBar with Badge Icon"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Pode ser utilizado com ENUM ou com Entidades;"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"- Utiliza generics;\n- A lista de items dever\xe1 ser passada de fora para dentro;\n"))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Customiza\xe7\xe3o do Bot\xe3o. Aten\xe7\xe3o para o Generics!")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Classe do Bottom Bar Item")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class GuaraniBottomBarItem {\n  GuaraniBottomBarItem({\n    required this.label,\n    required this.icon,\n    required this.activeIcon,\n    this.countBadge = 0,\n  });\n  final String label;\n  final IconData icon;\n  final IconData activeIcon;\n  final int countBadge;\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Classe da Custom Bottom Bar")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class GuaraniBottomBar extends StatefulWidget {\n  const GuaraniBottomBar({\n    super.key,\n    required this.items,\n    required this.onIndexSelected,\n  });\n\n  final List<GuaraniBottomBarItem> items;\n  final void Function(int index) onIndexSelected;\n\n  @override\n  State<GuaraniBottomBar> createState() => _GuaraniBottomBarState();\n}\n\nclass _GuaraniBottomBarState extends State<GuaraniBottomBar> {\n  int selectedItem = 0;\n\n  @override\n  Widget build(BuildContext context) {\n    return BottomNavigationBar(\n      items: List.from(\n        widget.items.map(\n          (item) => BottomNavigationBarItem(\n            icon: GuaraniBadgeIcon(\n              icon: item.icon,\n              countBadge: item.countBadge,\n            ),\n            activeIcon: GuaraniBadgeIcon(\n              icon: item.icon,\n              countBadge: item.countBadge,\n            ),\n            label: item.label,\n          ),\n        ),\n      ),\n      currentIndex: selectedItem,\n      landscapeLayout: BottomNavigationBarLandscapeLayout.centered,\n      selectedLabelStyle: const TextStyle(\n        fontWeight: FontWeight.bold,\n      ),\n      onTap: (value) {\n        widget.onIndexSelected(value);\n        setState(() {\n          selectedItem = value;\n        });\n      },\n    );\n  }\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Classe do Icon Badge")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class GuaraniBadgeIcon extends StatelessWidget {\n  const GuaraniBadgeIcon({\n    super.key,\n    required this.icon,\n    required this.countBadge,\n  });\n\n  final IconData icon;\n  final int countBadge;\n\n  @override\n  Widget build(BuildContext context) {\n    if (countBadge > 0) {\n      return Stack(\n        clipBehavior: Clip.none,\n        children: [\n          Icon(icon),\n          Positioned(\n              right: -5,\n              top: -5,\n              child: CircleAvatar(\n                radius: 6,\n                backgroundColor: Colors.red,\n                child: Text(\n                  '$countBadge',\n                  style: const TextStyle(\n                    fontSize: 6,\n                    color: Colors.white,\n                  ),\n                ),\n              )),\n        ],\n      );\n    }\n    return Icon(icon);\n  }\n}\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Contributor: Bwolf"),(0,a.kt)("p",{parentName:"admonition"},"Videos:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VVCMG2t8wxk&list=PL7M5mCCVCOMlcUoTYx1Fkk1tlpxFl3yd2&index=2"},"Bottom App Bar ( LFood - O Melhor app de Comida do Mundo Ep. 2)")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NTkexx_C_A4&list=PL7M5mCCVCOMlcUoTYx1Fkk1tlpxFl3yd2&index=3"},"Colocando Regra na BottomBar ( LFood Ep. 3)"))))}u.isMDXComponent=!0}}]);