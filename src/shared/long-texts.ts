import { Question } from './interfaces';
export const PARAGRAPH_KEYS = {
  lg:
    'A lawful good character acts as a good person is expected or required to act. He combines a commitment to oppose evil with the discipline to fight relentlessly. He tells the truth, keeps his word, helps those in need, and speaks out against injustice. A lawful good character hates to see the guilty go unpunished.  Lawful good is the best alignment you can be because it combines honor and compassion.  However, lawful good can be a dangerous alignment when it restricts freedom and criminalizes self-interest.',
  ng:
    'A neutral good character does the best that a good person can do. He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them. Neutral good is the best alignment you can be because it means doing what is good without bias for or against order. However, neutral good can be a dangerous alignment when it advances mediocrity by limiting the actions of the truly capable.',
  cg:
    "A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he's kind and benevolent. He believes in goodness and right but has little use for laws and regulations. He hates it when people try to intimidate others and tell them what to do. He follows his own moral compass, which, although good, may not agree with that of society. Chaotic good is the best alignment you can be because it combines a good heart with a free spirit. However, chaotic good can be a dangerous alignment when it disrupts the order of society and punishes those who do well for themselves.",
  ln:
    'A lawful neutral character acts as law, tradition, or a personal code directs him. Order and organization are paramount to him. He may believe in personal order and live by a code or standard, or he may believe in order for all and favor a strong, organized government. Lawful neutral is the best alignment you can be because it means you are reliable and honorable without being a zealot. However, lawful neutral can be a dangerous alignment when it seeks to eliminate all freedom, choice, and diversity in society.',
  nn:
    "A true neutral character does what seems to be a good idea. He doesn't feel strongly one way or the other when it comes to good vs. evil or law vs. chaos. Most true neutral characters exhibit a lack of conviction or bias rather than a commitment to neutrality. Such a character thinks of good as better than evil after all, he would rather have good neighbors and rulers than evil ones. Still, he's not personally committed to upholding good in any abstract or universal way. Some true neutral characters, on the other hand, commit themselves philosophically to neutrality. They see good, evil, law, and chaos as prejudices and dangerous extremes. They advocate the middle way of neutrality as the best, most balanced road in the long run. True neutral is the best alignment you can be because it means you act naturally, without prejudice or compulsion. However, true neutral can be a dangerous alignment when it represents apathy, indifference, and a lack of conviction.",
  cn:
    "A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn't strive to protect others' freedom. He avoids authority, resents restrictions, and challenges traditions. A chaotic neutral character does not intentionally disrupt organizations as part of a campaign of anarchy. To do so, he would have to be motivated either by good (and a desire to liberate others) or evil (and a desire to make those different from himself suffer). A chaotic neutral character may be unpredictable, but his behavior is not totally random. He is not as likely to jump off a bridge as to cross it. Chaotic neutral is the best alignment you can be because it represents true freedom from both society's restrictions and a do-gooder's zeal. However, chaotic neutral can be a dangerous alignment when it seeks to eliminate all authority, harmony, and order in society.",
  le:
    'A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts. He cares about tradition, loyalty, and order but not about freedom, dignity, or life. He plays by the rules but without mercy or compassion. He is comfortable in a hierarchy and would like to rule, but is willing to serve. He condemns others not according to their actions but according to race, religion, homeland, or social rank. He is loath to break laws or promises.  This reluctance comes partly from his nature and partly because he depends on order to protect himself from those who oppose him on moral grounds. Some lawful evil villains have particular taboos, such as not killing in cold blood (but having underlings do it) or not letting children come to harm (if it can be helped). They imagine that these compunctions put them above unprincipled villains.  Some lawful evil people and creatures commit themselves to evil with a zeal like that of a crusader committed to good. Beyond being willing to hurt others for their own ends, they take pleasure in spreading evil as an end unto itself. They may also see doing evil as part of a duty to an evil deity or master. Lawful evil is sometimes called diabolical, because devils are the epitome of lawful evil. Lawful evil is the best alignment you can be because it combines honor and dedicated self-interest. However, lawful evil can be a dangerous alignment because it represents methodical, intentional, and frequently successful evil.',
  ne:
    "A neutral evil villain does whatever he can get away with. He is out for himself, pure and simple. He sheds no tears for those he kills, whether for profit, sport, or convenience. He has no love of order and holds no illusion that following laws, traditions, or codes would make him any better or more noble. On the other hand, he doesn't have the restless nature or love of conflict that a chaotic evil villain has.  Some neutral evil villains hold up evil as an ideal, committing evil for its own sake. Most often, such villains are devoted to evil deities or secret societies. Neutral evil is the best alignment you can be because you can advance yourself without regard for others. However, neutral evil can be a dangerous alignment because it represents pure evil without honor and without variation.",
  ce:
    'A chaotic evil character does whatever his greed, hatred, and lust for destruction drive him to do. He is hot-tempered, vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can get, he is ruthless and brutal. If he is committed to the spread of evil and chaos, he is even worse. Thankfully, his plans are haphazard, and any groups he joins or forms are poorly organized. Typically, chaotic evil people can be made to work together only by force, and their leader lasts only as long as he can thwart attempts to topple or assassinate him. Chaotic evil is sometimes called demonic because demons are the epitome of chaotic evil. Chaotic evil is the best alignment you can be because combines self-interest and pure freedom. However, chaotic evil can be a dangerous alignment because it represents the destruction not only of beauty and life but also of the order on which beauty and life depend.',
};
export const QUESTIONS: Question[] = [
  {
    id: '1',
    question:
      '1. Family elders are expressing disapproval of you to the rest of the family. Do you:',
    option1: 'Accept the criticism and change your ways?',
    option2: 'Seek a compromise with them?',
    option3:
      'Besmirch the reputation of those expressing disapproval as you ignore their scorn?',
    option4: 'Silence them any way you can?',
  },
  {
    id: '2',
    question:
      '2. Would you give up a promising career to aid the family in time of need?',
    option1: 'In a heartbeat.',
    option2: 'Yes, with some reluctance.',
    option3: "Only if I was certain I'd be able to return to my career soon.",
    option4: 'No.',
  },
  {
    id: '3',
    question: '3. Would you betray a family member to advance your own career?',
    option1: 'Yes, without a twinge of guilt.',
    option2: 'Yes, if I could do it secretly.',
    option3: "I'd resist the temptation.",
    option4: 'I find the very idea abhorrent.',
  },
  {
    id: '4',
    question: '4. Do you respect the leaders of your family?',
    option1: 'Their words guide my actions.',
    option2: "They're role models for me.",
    option3: "They're often out of touch with my life.",
    option4: "They're out of touch with reality.",
  },
  {
    id: '5',
    question:
      '5. If your family had arranged your marriage to someone loathsome, would you:',
    option1: 'Go through with it, proud to serve your family?',
    option2: 'Agree, hiding your reluctance?',
    option3: 'Subtly work against the union?',
    option4: 'Flee?',
  },
  {
    id: '6',
    question:
      "6. You're estranged from a family member. On his deathbed, he seeks reconciliation. Do you:",
    option1: 'Speak to him, but hold your ground?',
    option2: 'Refuse to speak to him?',
    option3: 'Discuss your estrangement openly and without rancor?',
    option4: 'Actively seek reconciliation, and heed his dying words?',
  },
  {
    id: '7',
    question:
      "7. A powerful but corrupt judge offers you wealth if you'll testify against your friend.Do you:",
    option1: 'Condemn your friend and take the money?',
    option2:
      'Take the money and testify, but try to keep your testimony ineffective?',
    option3: 'Refuse the offer and refuse to testify?',
    option4: "Testify on your friend's behalf, no matter the consequences?",
  },
  {
    id: '8',
    question:
      '8. Do you become close to friends, or hold most people at a safe distance?',
    option1: 'I have an abundance of close friends.',
    option2: 'I have some close friends.',
    option3: 'I have few close friends.',
    option4: 'I try to keep people at a distance.',
  },
  {
    id: '9',
    question: '9. Have you ever betrayed a friend?',
    option1: "I've done so more than once, and I sometimes get away with it.",
    option2: "I've done so once.",
    option3: "I've been tempted to do so, but I've never gone through with it.",
    option4: "I'd never contemplate such a thing.",
  },
  {
    id: '10',
    question:
      '10. How do you view lifelong commitment to a single romantic partner?',
    option1: 'I have or want such a romance.',
    option2: "Such a romance would be ideal--if it's achievable.",
    option3: "I worry I'd miss out on what others have to offer.",
    option4: 'Tie yourself to one person? Huge mistake.',
  },
  {
    id: '11',
    question: '11. Do you insist on repayment when lending money to friends?',
    option1: "Yes, and I write up a contract so there's no misunderstanding.",
    option2: 'Yes, but I try to be flexible about the exact terms.',
    option3: "No, although it's sure nice to be repaid.",
    option4: 'No, they just owe me a favor.',
  },
  {
    id: '12',
    question: '12. Are you still in touch with childhood friends?',
    option1: 'Yes, we correspond regularly.',
    option2: 'Yes, we try to keep in touch.',
    option3: 'No, I move around too much.',
    option4: "No, I don't have anything in common with them anymore.",
  },
  {
    id: '13',
    question:
      '13. Do you donate time and money to improve the local community?',
    option1: 'Yes, the needs of the community are my top priority.',
    option2: 'Yes, I donate as much as I can once my own needs are met.',
    option3: "No, I don't have enough time or money to spare.",
    option4: 'No, my local community would be a waste of time and money.',
  },
  {
    id: '14',
    question: '14. Your community is threatened with invasion. Do you:',
    option1: 'Help defend it to your last breath?',
    option2: 'Defend the area with the rest of your community?',
    option3: 'Flee as soon as things look grim?',
    option4: 'Cut a deal with the enemy to act as a spy?',
  },
  {
    id: '15',
    question:
      '15. If you were injured and required immediate assistance, would members of your hometown agree to help?',
    option1: "Yes, because they know I'd do the same for them.",
    option2: "Yes, because I'm generally well liked in my home town.",
    option3: "Probably not, because I'm distrusted in my home town.",
    option4: "Definitely not, I've made some enemies in my home town.",
  },
  {
    id: '16',
    question: '16. Do you respect the laws and authorities of the community?',
    option1: 'Yes, without question.',
    option2: "Yes, they're generally the best way to govern.",
    option3: "When it suits me--there are some laws I just don't agree with.",
    option4:
      "I don't pay attention to the authorities; they've got no hold on me.",
  },
  {
    id: '17',
    question: '17. Do members of your home town shun, avoid, or mock you?',
    option1: "Yes, their small minds can't handle anyone outside the norm.",
    option2: "Some do, because I don't always fit in.",
    option3: "No, I'm generally seen as normal.",
    option4: 'No, I set the standard for what is normal in my community.',
  },
  {
    id: '18',
    question:
      '18. Would you stand for office or seek to represent the interests of the community in some public manner?',
    option1: "To do so would be an honor I'd joyously accept.",
    option2: "Of course. It's everyone's duty to do so.",
    option3: 'Only if no one else could handle the job.',
    option4: "No, I don't want to be responsible for the community's welfare.",
  },
  {
    id: '19',
    question: '19. Your country is wracked with famine. Would you:',
    option1: 'Share what food you had with others?',
    option2: 'Eat as little as possible yourself, and share the rest?',
    option3: 'Steal what food you needed to survive?',
    option4:
      'Steal as much food as possible, then sell it back to the community at a high price?',
  },
  {
    id: '20',
    question:
      "20. If offered enough money, would you slip a poison into your king's drink?",
    option1: "Yes, I've done similar things before.",
    option2: 'Yes, if I thought I could get away with it.',
    option3: 'No, although a vast sum of money would tempt me.',
    option4: "No, and I'd warn the king of the plot.",
  },
  {
    id: '21',
    question: '21. A plague is sweeping across your country. Would you:',
    option1: 'Undertake a dangerous mission to find the cure?',
    option2: 'Heal the sick as best you can?',
    option3: 'Avoid contact with the sick?',
    option4: 'Flee the country?',
  },
  {
    id: '22',
    question:
      '22. Do you respect the lawful authority of the rulers of the land?',
    option1: 'Yes, Long live the queen!',
    option2: 'Yes, our rulers are generally fair and just.',
    option3: 'No, a ruler is no better than anyone else.',
    option4: 'No, rulers are invariably corrupted by power.',
  },
  {
    id: '23',
    question:
      '23. If you were offered a reasonably lucrative deal, would you spy for a hostile foreign power?',
    option1: 'Yes, because this nation could stand to be knocked down a peg.',
    option2: "Yes, because the nation's secrets mean little to me.",
    option3: 'No, because I might get caught.',
    option4: "No, because I'd never violate the trust my nation puts in me.",
  },
  {
    id: '24',
    question:
      '24. Do you rely on the government to enforce contracts and property rights?',
    option1:
      'Yes, because maintaining the rule of law is more important than any individual',
    option2:
      'Yes, because the courts are best equipped to handle such disputes.',
    option3: "Are you kidding me? The government can't even pave roads.",
    option4:
      "Absolutely not. If I can't defend it myself, I don't deserve to have it.",
  },
  {
    id: '25',
    question: '25. If imprisoned, would you injure or kill others to escape?',
    option1: "Yes. Serves 'em right for locking me up.",
    option2: 'Yes. They knew the risks when they took the job.',
    option3: 'No, except for minor wounds that will heal easily.',
    option4: 'No. Those guards are just doing their jobs.',
  },
  {
    id: '26',
    question:
      "26. Do you accept a noble's right to treat badly the serfs who work on his land?",
    option1: "Yes. They're lucky they're not slaves.",
    option2: 'Yes, because sometimes only fear will motivate them.',
    option3: 'No, nobles should rule as kindly as possible.',
    option4: 'No one has any "right" to treat another badly. Period.',
  },
  {
    id: '27',
    question: '27. You have accidentally committed a crime. Do you:',
    option1: 'Turn yourself in, and attempt to make restitution to the victim?',
    option2: 'Turn yourself in, throwing yourself on the mercy of the court?',
    option3: 'Hide your involvement, lying if you have to?',
    option4: 'Try to pin the crime on another?',
  },
  {
    id: '28',
    question: '28. If guilty, would you confess to a crime?',
    option1: 'Yes, because it is my duty to do so.',
    option2: 'Yes, because it might get me a lighter sentence.',
    option3: "No, I'd make the magistrates prove my guilt.",
    option4: 'No, and I\'d try to "prove" my own innocence.',
  },
  {
    id: '29',
    question:
      '29. Would you express a revolutionary political opinion if threatened with punishment?',
    option1: "Yes, I'd rather be punished than remain silent.",
    option2: "Yes. Somebody's got to speak the truth.",
    option3: 'No, although I might privately express my opinion to friends.',
    option4: "No, politics aren't worth getting worked up about.",
  },
  {
    id: '30',
    question:
      '30. While traveling, you witness an assault. You are ordered to testify, which will delay your travel significantly. Do you:',
    option1: 'Slip out of town at night to avoid testifying.',
    option2: 'Deny you saw anything.',
    option3: 'Remain reluctantly, testify, and leave.',
    option4:
      "Remain until the trial's conclusion in case further testimony is needed.",
  },
  {
    id: '31',
    question: '31. What is the best use of wealth?',
    option1: 'To help the destitute and less fortunate.',
    option2: 'Provide for the needs of friends and family.',
    option3: 'To stay on top of the heap yourself.',
    option4:
      'To not only stay on top, but keep others from climbing to your level.',
  },
  {
    id: '32',
    question: '32. When confronted by beggars, do you:',
    option1: 'Give generously?',
    option2: 'Give moderately?',
    option3:
      "Give only what you wouldn't miss anyway--a dollar or two at the most?",
    option4: 'Ignore them as you walk by?',
  },
  {
    id: '33',
    question:
      '33. By using magic, you could fool village merchants into thinking your copper pieces were made of gold. Do you?',
    option1: "Yes, and I'll buy as much as I can.",
    option2: "Yes, but I'll only cheat the rich merchants.",
    option3: "No, it's too risky.",
    option4: 'No, those merchants have families to feed.',
  },
  {
    id: '34',
    question:
      '34. You have two job offers. One pays more, but the other is secure and steady. Which do you choose?',
    option1: 'Definitely the lucrative job; steady work sounds like drudgery.',
    option2:
      "Probably the lucrative job, although I'd look into the secure job.",
    option3: 'The secure job, unless the other job was outrageously lucrative.',
    option4: 'Definitely the secure job, because I plan for the long term.',
  },
  {
    id: '35',
    question: "35. What's the best path to wealth?",
    option1:
      "It's a matter of luck and being in the right place at the right time.",
    option2:
      'Staying flexible so you can take advantage of good opportunities.',
    option3:
      'Following a long-term plan that incorporates a comfortable level of risk.',
    option4: 'Hard work and perseverance.',
  },
  {
    id: '36',
    question:
      '36. If you accepted a job or contract, would you try to finish the task even if it got much more dangerous?',
    option1: 'Yes, my word is my bond.',
    option2: "Yes, because it's good to have a reputation for dependability.",
    option3: "You can bet I'd be renegotiating.",
    option4: "If it's no longer a good deal, then the deal is off.",
  },
];
