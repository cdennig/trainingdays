(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{747:function(e,t,s){e.exports=s.p+"assets/img/rg-created.6f8a203d.png"},748:function(e,t,s){e.exports=s.p+"assets/img/cluster-rg.d29bea96.png"},749:function(e,t,s){e.exports=s.p+"assets/img/auto-rg.db7f5b11.png"},750:function(e,t,s){e.exports=s.p+"assets/img/dashboard-login.fe616b47.png"},751:function(e,t,s){e.exports=s.p+"assets/img/all-namespaces-dashboard.1e83fb32.png"},844:function(e,t,s){"use strict";s.r(t);var a=s(45),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-your-first-kubernetes-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-kubernetes-cluster"}},[e._v("#")]),e._v(" Create your first Kubernetes Cluster")]),e._v(" "),a("p",[e._v("In this section we will create a Kubernetes cluster using the Azure CLI, configure your local access credentials to control your cluster using kubectl, take some first steps and run our first pod.")]),e._v(" "),a("h2",{attrs:{id:"create-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-the-cluster"}},[e._v("#")]),e._v(" Create the cluster")]),e._v(" "),a("p",[e._v("To have a clean overview of what is being provisioned under the hood, we create a new resource\ngroup and and create our Kubernetes cluster within.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("az group create --name adc-aks-rg --location westeurope\naz aks create --resource-group adc-aks-rg --name adc-cluster --generate-ssh-keys --kubernetes-version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.19")]),e._v(".7\n")])])]),a("p",[e._v("Let's inspect the created resources:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(747),alt:"Created resource groups"}})]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("az aks create")]),e._v(" command created a second resource group named\n"),a("code",[e._v("MC_adc-aks-rg_adc-cluster_westeurope")]),e._v(" containing all resources provisioned for our AKS\ncluster.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(748),alt:"Resource group with AKS resource"}})]),e._v(" "),a("p",[e._v("The resource group we explicitly created only holds the AKS resource.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(749),alt:"Automatically created resource group"}})]),e._v(" "),a("p",[e._v("All other resource for the cluster are created in it's own resource group. This resource group and\nall it's containing resources will be deleted when the cluster is destroyed.")]),e._v(" "),a("h2",{attrs:{id:"establish-access-to-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#establish-access-to-the-cluster"}},[e._v("#")]),e._v(" Establish access to the cluster")]),e._v(" "),a("p",[e._v("Now it's time to access our cluster. To authenticate us against the cluster Kubernetes uses client\ncertificates and access tokens. To obtain these access credentials for our newly created cluster we\nuse the "),a("code",[e._v("az aks get-credentials")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ az aks get-credentials --resource-group adc-aks-rg --name adc-cluster\nMerged "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"adc-cluster"')]),e._v(" as current context "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" /home/waltken/.kube/config\n\n$ kubectl version "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# check client and server version of kubernetes")]),e._v("\nClient Version: version.Info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("Major:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),e._v(", Minor:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"20"')]),e._v(", GitVersion:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v1.20.2"')]),e._v(", GitCommit:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"faecb196815e248d3ecfb03c680a4507229c2a56"')]),e._v(", GitTreeState:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"clean"')]),e._v(", BuildDate:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2021-01-14T18:56:46Z"')]),e._v(", GoVersion:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"go1.15.6"')]),e._v(", Compiler:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"gc"')]),e._v(", Platform:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"linux/amd64"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\nServer Version: version.Info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("Major:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),e._v(", Minor:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"19"')]),e._v(", GitVersion:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v1.19.7"')]),e._v(", GitCommit:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"14f897abdc7b57f0850da68bd5959c9ee14ce2fe"')]),e._v(", GitTreeState:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"clean"')]),e._v(", BuildDate:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2021-01-22T17:29:38Z"')]),e._v(", GoVersion:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"go1.15.5"')]),e._v(", Compiler:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"gc"')]),e._v(", Platform:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"linux/amd64"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[a("code",[e._v("kubectl version")]),e._v(" prints both the version of the locally running commandline tool as well as the\nKubernetes version running on our cluster. To inspect the access credentials and cluster\nconfiguration stored for us in our "),a("code",[e._v("~/.kube/config")]),e._v(" file run "),a("code",[e._v("kubectl config view")]),e._v(".")]),e._v(" "),a("p",[e._v("We've setup access to our Kubernetes cluster. Now we can start exploring and working with our\ncluster.")]),e._v(" "),a("h2",{attrs:{id:"access-the-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-the-dashboard"}},[e._v("#")]),e._v(" Access the dashboard")]),e._v(" "),a("p",[e._v("AKS no longer comes with the kubernetes-dashboard installed by default. Lucky\nfor us there is a one-liner to quickly install the dashboard into our\ncluster:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml\n")])])]),a("p",[e._v("Now, accessing the dashboard requires us to create a "),a("code",[e._v("ServiceAccount")]),e._v(" with the\n"),a("em",[e._v("cluster-admin")]),e._v(" "),a("code",[e._v("ClusterRole")]),e._v(".")]),e._v(" "),a("p",[e._v("To create these "),a("code",[e._v("Resources")]),e._v(" within our Kubernetes cluster we will first declare the desired\nconfiguration for our "),a("code",[e._v("ServiceAccount")]),e._v(" in a yaml file and apply the desired configuration to our\ncluster using the "),a("code",[e._v("kubectl apply")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# dashboard-admin.yaml")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a ServiceAccount that we can use to access the Dashboard")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ServiceAccount\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a ServiceAccount named admin-user")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" kubernetes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dashboard\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This separates multiple resource definitions in a single file")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Bind the cluster-admin ClusterRole to the admin-user ServiceAccount")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" rbac.authorization.k8s.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ClusterRoleBinding\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("roleRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" rbac.authorization.k8s.io\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ClusterRole\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("admin\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("subjects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ServiceAccount\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" kubernetes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dashboard\n")])])]),a("p",[e._v("Create a new "),a("code",[e._v("dashboard-admin.yaml")]),e._v(" file and paste the above content.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("INFO:")]),e._v(" you will be creating lots of YAML files today - hooray! 😃 Create a folder called "),a("code",[e._v("yaml")]),e._v(" in the root directory of your repo and save all files you create within that location. You can apply the manifests via kubectl from that folder.")])]),e._v(" "),a("p",[e._v("We can apply the configuration using the following line:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl apply -f dashboard-admin.yaml\nserviceaccount/admin-user created\nclusterrolebinding.rbac.authorization.k8s.io/admin-user created\n")])])]),a("p",[e._v("We need to discover the created users secret access token, to gain access to the dashboard.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl -n kubernetes-dashboard get secret\nNAME                               TYPE                                  DATA   AGE\nadmin-user-token-22554             kubernetes.io/service-account-token   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("      32s\ndefault-token-8fjcr                kubernetes.io/service-account-token   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("      76s\nkubernetes-dashboard-certs         Opaque                                "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("      76s\nkubernetes-dashboard-csrf          Opaque                                "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("      76s\nkubernetes-dashboard-key-holder    Opaque                                "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("      75s\nkubernetes-dashboard-token-zmvj4   kubernetes.io/service-account-token   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("      76s\n")])])]),a("p",[e._v("Find the secret that belongs to the "),a("code",[e._v("admin-user-token")]),e._v(" and let "),a("code",[e._v("kubectl describe")]),e._v(" it to see the content of the secret:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl -n kubernetes-dashboard describe secret admin-user-token-smw2j\nName:         admin-user-token-22554\nNamespace:    kubernetes-dashboard\nLabels:       "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nAnnotations:  kubernetes.io/service-account.name: admin-user\n              kubernetes.io/service-account.uid: 02a8e2e7-c25d-48a2-b8b8-f6ce99e77a5d\n\nType:  kubernetes.io/service-account-token\n\nData\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v("\nca.crt:     "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1765")]),e._v(" bytes\nnamespace:  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(" bytes\ntoken:      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n")])])]),a("blockquote",[a("p",[e._v("Watch out! You token will have a different random 5 character suffix.")])]),e._v(" "),a("p",[e._v("Copy the token to your clipboard for the next step.")]),e._v(" "),a("p",[e._v("Now we start the kubernetes proxy to access the remote api safely on our local machine:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl proxy\nStarting to serve on "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1:8001\n")])])]),a("p",[e._v("The process keeps running until you interrupt it using "),a("code",[e._v("Ctrl-C")]),e._v(". Let's keep it running for now.")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Access the dashboard"),a("OutboundLink")],1),e._v("\nand login using the token you've acquired for the "),a("em",[e._v("admin-user")]),e._v(" "),a("code",[e._v("ServiceAccount")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:s(750),alt:"Dashboard Login"}})]),e._v(" "),a("p",[e._v("Take your time to explore the dashboard. Make use of the "),a("code",[e._v("Namespace")]),e._v(" selector to navigate the\ndifferent namespaces.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(751),alt:"Dashboard Overview"}})]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Security Note:")]),e._v(' The dashboard component is considered a "security risk", because it is an additional way to access your cluster - and you have to take care of securing it. Normally, you would not install the dashboard component in production clusters. There is an option for disabling the dashboard, even after installation: '),a("code",[e._v("az aks disable-addons -a kube-dashboard -n my_cluster_name -g my_cluster_resource_group")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"run-your-first-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-your-first-pod"}},[e._v("#")]),e._v(" Run your first pod")]),e._v(" "),a("p",[e._v("Now we will run our first pod on our kubernetes cluster. Let's keep the "),a("code",[e._v("kubectl proxy")]),e._v(" command\nrunning and execute this in new tab in your console.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl run -i -t pod1 --image"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("busybox --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Never --rm"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\nIf you don't see a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v(" prompt, try pressing enter.\n/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n")])])]),a("p",[e._v("We've just started a "),a("code",[e._v("Pod")]),e._v(" named "),a("em",[e._v("pod1")]),e._v(" based on the "),a("em",[e._v("busybox")]),e._v(" image.")]),e._v(" "),a("p",[e._v("To understand the different flags we've added to the command take a look at the built in\ndocumentation to "),a("code",[e._v("kubectl run")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl run --help\nCreate and run a particular image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" a pod.\n\nExamples:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start a nginx pod.")]),e._v("\n  kubectl run nginx --image"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nginx\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),a("h2",{attrs:{id:"questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[e._v("#")]),e._v(" Questions")]),e._v(" "),a("p",[e._v("What do the different flags ("),a("code",[e._v("-i")]),e._v(", "),a("code",[e._v("-t")]),e._v(", "),a("code",[e._v("--restart=Never")]),e._v(", "),a("code",[e._v("--rm=True")]),e._v(") used in the "),a("code",[e._v("kubectl run")]),e._v("\ncommand do?")])])}),[],!1,null,null,null);t.default=r.exports}}]);