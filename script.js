function createEle(element, className=""){
    let elem = document.createElement(element);
    elem.setAttribute('class', className);
    return elem;
}
let main = createEle('div','main');
//head
let head = createEle('div','head');
let img = createEle('img');
img.setAttribute('src', 'brian.jfif');
img.setAttribute('style', 'border-radius: 50%;')
let gap = createEle('div','gap');
let hh1 = createEle('h1', 'center neg');
hh1.innerHTML = 'Brian dudey'
head.append(img, gap, hh1);

//div1
let p1Div = createEle('div');
let para1 = createEle('p','center');
para1.innerHTML = 'Brian dudey, chennai 600 059 | 999-999-9999 | xyz@gmail.com | www.kickresume.com';
p1Div.append(para1);

//document.body.append(head,p1Div)

let hr = createEle('hr');


//left div

let left = createEle('div','left');

//h2

let user1 = createEle('h2');
user1.innerHTML = '<i class="fas fa-user-circle dotted"></i> Profile'

let profile = createEle('div');
let ldiv1 = createEle('p');
ldiv1.innerHTML = 'Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.';
profile.append(ldiv1);
let skills = createEle('h2');
skills.innerHTML = '<i class="fas fa-flask dotted"></i> Skills';

// second div
let tskills = createEle('div');
let tskillspos = createEle('h4', 'center');
tskillspos.innerHTML = 'Technical Skills';
let tskillsulist = createEle('ul', 'none');
let br  = createEle('div');
br.innerHTML ="<br></br>"


let tskillsli1 = createEle('li');
let tskills1 = createEle('div', 'leeft');
tskills1.innerHTML = 'Javascript';
let tskills1contain = createEle('div','container');
tskills1contain.setAttribute('style','margin-bottom: 12px;')
let tskills1cpp = createEle('div', 'cpp');
tskills1cpp.setAttribute('style', 'width:80%');
let tskillscursor = createEle('i','fad fa-circle');
tskills1cpp.append(tskillscursor);
tskills1contain.append(tskills1cpp);
tskillsli1.append(tskills1, tskills1contain);


let tskillsli2= createEle('li');
let tskills2 = createEle('div', 'leeft');
tskills2.innerHTML = 'HTML';
let tskills2contain = createEle('div','container');
tskills2contain.setAttribute('style','margin-bottom: 12px;')
let tskills2cpp = createEle('div', 'cpp');
tskills2cpp.setAttribute('style', 'width:80%');
let tskills2cursor = createEle('i','fad fa-circle');
tskills2cpp.append(tskills2cursor);
tskills2contain.append(tskills2cpp);
tskillsli2.append(tskills2, tskills2contain);


let tskillsli3 = createEle('li');
let tskills3 = createEle('div', 'leeft');
tskills3.innerHTML = 'CSS';
let tskills3contain = createEle('div','container');
tskills3contain.setAttribute('style','margin-bottom: 12px;')
let tskills3cpp = createEle('div', 'cpp');
tskills3cpp.setAttribute('style', 'width:60%');
let tskills3cursor = createEle('i','fad fa-circle');
tskills3cpp.append(tskills3cursor);
tskills3contain.append(tskills3cpp);
tskillsli3.append(tskills3, tskills3contain);

tskillsulist.append(tskillsli1,tskillsli2,tskillsli3);



let askills = createEle('h4', 'center');
askills.setAttribute('style', 'padding-top:85px')
askills.innerHTML = 'Additional Skills';

let akillsulist = createEle('ul', 'none');
let akillsli1 = createEle('li');
let akills1 = createEle('div', 'leeft');
akills1.innerHTML = 'PROJECT MANAGEMENT';
let akills1contain = createEle('div','container');
akills1contain.setAttribute('style','margin-bottom: 12px;')
let askills1cpp = createEle('div', 'cpp');
askills1cpp.setAttribute('style', 'width:60%');
let askillscursor = createEle('i','fad fa-circle');
askills1cpp.append(askillscursor);
akills1contain.append(askills1cpp);
akillsli1.append(akills1, akills1contain);

let askillsli2 = createEle('li');
let askills2 = createEle('div', 'leeft');
askills2.innerHTML = 'RECRUITMENT';
let askillscontain = createEle('div','container');
askillscontain.setAttribute('style','margin-bottom: 12px;')
let askills2cpp = createEle('div', 'cpp');
askills2cpp.setAttribute('style', 'width:50%');
let askills2cursor = createEle('i','fad fa-circle');
askills2cpp.append(askills2cursor);
askillscontain.append(askills2cpp);
askillsli2.append(askills2, askillscontain);

akillsulist.append(akillsli1,askillsli2);

tskills.append(tskillspos, tskillsulist, askills,akillsulist);
//document.body.append(tskills)
/*
// end of second div*/


//document.body.append(head,p1Div,user1,ldiv1,tskills)
let wexp15 = createEle('h2');
wexp15.innerHTML = '<i class="fas fa-briefcase dotted"></i> Work Experience';


let workexp1 = createEle('div');
let workexpp = createEle('p');
let workexpf = createEle('b', 'font');
workexpf.innerHTML = 'Java Developer';
let lworkexpspan = createEle('span');
lworkexpspan.setAttribute('style', 'float: right;')
lworkexpspan.innerHTML = '10/2019 - 11/2020';
workexpp.append(workexpf, lworkexpspan);
let workexpp1 = createEle('p');
workexpp1.innerHTML = 'Front';

workexp1ul = createEle('ul');
workexp1li = createEle('li');
workexp1li.innerHTML = 'bzbdcbcjzdhcifs sjdhifsjfosfjb sjedhfisjfosjfo'
workexp2li = createEle('li');
workexp2li.innerHTML = 'awdh jasdhiaj sjjofsj shfisjfb sejdfb'
workexp3li = createEle('li');
workexp3li.innerHTML = 'dsnfb shbfjsb shfisjf hsbfsjnfsjbf sjzcisjfvise'
workexp4li = createEle('li');
workexp4li.innerHTML = 'sfjfn sjfisjfn sjnfisfins sjbfsfsnfjsbf'
workexp1ul.append(workexp1li, workexp2li, workexp3li, workexp4li);
workexp1.append(workexpp,workexpp1,workexp1ul);
 left.append(head,p1Div,user1,ldiv1,tskills,wexp15,workexp1)
//document.body.append(left)


let vertical = createEle('div','vertical');

//right div started
let right = createEle('div','right');

let wexp1 = createEle('h2');
wexp1.innerHTML = '<i class="fas fa-briefcase dotted"></i> Work Experience';

//right first div

let woexp1 = createEle('div');
let woexpp = createEle('p');
let woexppb = createEle('b', 'font');
woexppb.innerHTML = 'Java Developer';
let woexppspan = createEle('span');
woexppspan.setAttribute('style', 'float: right;')
woexppspan.innerHTML = '07/2018 - 06/2019';
woexpp.append(woexppb, woexppspan);
let woexp2 = createEle('p');
woexp2.innerHTML = 'Software quality control';

woexp3ul = createEle('ul');
woexp3ulli1 = createEle('li');
woexp3ulli1.innerHTML = 'jnkz sajdcnok sdzkdmszdpsc jdnvjsdxnv'
woexp3ulli2 = createEle('li');
woexp3ulli2.innerHTML = 's  dkssnksso sdnfsjdhf sjdnsjfnjsjfbsj'
woexp3ulli3 = createEle('li');
woexp3ulli3.innerHTML = 'szdb dhcvbsjdbs vjxzncka sdjfsidjfvisj'
woexp3ulli4 = createEle('li');
woexp3ulli4.innerHTML = 'sdfn sjdjfia ajdnaijd szuiasjf hsbfsjfije'
woexp3ul.append(woexp3ulli1, woexp3ulli2, woexp3ulli3, woexp3ulli4);
woexp1.append(woexpp,woexp2,woexp3ul);

//end of right first div

let edu = createEle('h2');
edu.innerHTML = '<i class="fas fa-graduation-cap dotted"></i> Education';

// right second div

edu0 = createEle('div');
edup1 = createEle('p');
edup1b = createEle('b', 'font');
edup1b.innerHTML = 'Bachelor of Technology';
edup1span = createEle('span');
edup1span.setAttribute('style', 'float: right;');
edup1span.innerHTML = '2015 - 2019';
edup1.append(edup1b, edup1span);
edup2 = createEle('p');
edup2.innerHTML = 'INDIAN INSTITUTE OF INFORMATION TECHNOLOGY'
edu0.append(edup1, edup2);

// end of second div


// right third div

edu1 = createEle('div');
edu1p1 = createEle('p');
edu1p1b = createEle('b', 'font');
edu1p1b.innerHTML = 'AISSC';
edu1p1span = createEle('span');
edu1p1span.setAttribute('style', 'float: right;');
edu1p1span.innerHTML = '2013 - 2015';
edu1p1.append(edu1p1b, edu1p1span);
edu1p2 = createEle('p');
edu1p2.innerHTML = 'S.B.O.A School & Junior College'
edu1.append(edu1p1, edu1p2);

// end of third div

// right fourth div

edu2 = createEle('div');
edu2p1 = createEle('p');
edu2p1b = createEle('b', 'font');
edu2p1b.innerHTML = 'SSC';
edu2p1span = createEle('span');
edu2p1span.setAttribute('style', 'float: right;');
edu2p1span.innerHTML = '2013';
edu2p1.append(edu2p1b, edu2p1span);
edu2p2 = createEle('p');
edu2p2.innerHTML = 'S.B.O.A School & Junior College'
edu2.append(edu2p1, edu2p2);

// end of fourth div

right.append(wexp1,woexp1,edu,edu0, edu1, edu2);

main.append(head, p1Div,hr ,left, vertical, right);
document.body.append(main)


