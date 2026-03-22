export default function YouMightAlsoLikeSection({ reposData }: any) {
  // Use remaining repos or an empty array if none
  const otherRepos = reposData || [];
  if (otherRepos.length === 0) return null;

  // GIF backgrounds for the icon boxes
  const iconGifs = [
    "https://tenor.com/view/what-you-sure-you-sure-about-that-dog-watching-gif-26139783.gif",
    "https://tenor.com/view/funny-memes-funny-memes-2024-gif-15530730491126408476.gif",
    "https://tenor.com/view/funny-memes-2024-gif-15241218472894861935.gif",
    "https://tenor.com/view/funny-memes-2024-funny-gif-9009808444121158551.gif",
    "https://tenor.com/view/funny-memes-funny-memes-2024-gif-5761664041089796587.gif",
    "https://tenor.com/view/memes-funny-funny-memes-funny-memes-2024-gif-12608977225527496933.gif",
    "https://tenor.com/view/funny-funny-memes-2024-funny-memes-funny-meme-funny-jokes-gif-7090350596769630822.gif",
    "https://tenor.com/view/hilarious-funny-memes-2024-gif-3068227262716130167.gif",
    "https://tenor.com/view/silly-cat-walk-weird-funny-gif-2373460010667044530.gif",
    "https://tenor.com/view/cat-brainrot-silly-silly-cat-funny-cat-gif-6631809937680889786.gif",
    "https://tenor.com/view/funny-laughing-cat-gif-8578940473977615738.gif",
    "https://tenor.com/view/cat-cat-meme-memes-cats-black-cat-gif-1122926624362280651.gif",
    "https://tenor.com/view/funny-cat-cat-tongue-smiling-cat-similing-funny-cat-tongue-gif-14787572273979504208.gif",
    "https://tenor.com/view/cat-funny-gagaga-gif-1013950960544354229.gif",
    "https://tenor.com/view/uncanny-cat-uncanny-cat-meme-funny-gif-10335249887687121387.gif",
    "https://tenor.com/view/uuh-cat-funny-cats-weird-looking-gif-17314413428589662854.gif",
    "https://tenor.com/view/cat-funny-funny-cacats-cat-ok-gif-1534500131205684036.gif",
    "https://tenor.com/view/cyo-funny-cat-cat-gif-247897091880091713.gif",
    "https://tenor.com/view/software-engineer-programmer-meme-coding-meme-gif-14631778310012477075.gif",
    "https://tenor.com/view/programmer-gif-1493122867651974423.gif",
    "https://tenor.com/view/this-is-fine-fire-dog-gif-7931636.gif",
    "https://tenor.com/view/distracted-boyfriend-meme-look-away-gif-12748678.gif",
    "https://tenor.com/view/mind-blown-explosion-gif-7543143.gif",
    "https://tenor.com/view/nope-nope-nope-no-way-gif-14424933.gif",
    "https://tenor.com/view/deal-with-it-sunglasses-gif-5547495.gif",
    "https://tenor.com/view/fine-this-is-fine-everything-is-fine-fire-gif-17270028.gif",
    "https://tenor.com/view/work-from-home-cat-laptop-gif-14837177.gif",
    "https://tenor.com/view/cat-typing-computer-keyboard-gif-14219088.gif",
    "https://tenor.com/view/cat-judge-judging-you-stare-gif-13788520.gif",
    "https://tenor.com/view/cat-no-nope-says-no-gif-14844722.gif",
    "https://tenor.com/view/cat-knock-push-table-things-gif-12678427.gif",
    "https://tenor.com/view/orange-cat-stare-suspicious-meme-gif-16658263.gif",
    "https://tenor.com/view/grumpy-cat-not-amused-no-gif-11746578.gif",
    "https://tenor.com/view/cat-vibe-head-bop-dance-gif-15448506.gif",
    "https://tenor.com/view/cat-shocked-surprised-eyes-wide-gif-15773060.gif",
    "https://tenor.com/view/cat-loaf-bread-loafing-gif-16200887.gif",
    "https://tenor.com/view/it-works-on-my-machine-developer-programmer-gif-20519378.gif",
    "https://tenor.com/view/debugging-code-crying-developer-programmer-gif-20519444.gif",
    "https://tenor.com/view/stack-overflow-copy-paste-programmer-coding-gif-17345678.gif",
    "https://tenor.com/view/hackerman-hack-hacking-hacker-gif-8910679.gif",
    "https://tenor.com/view/one-does-not-simply-meme-boromir-lord-of-the-rings-gif-9107084.gif",
    "https://tenor.com/view/git-commit-push-programming-coding-gif-18734521.gif",
    "https://tenor.com/view/coding-3am-night-programmer-dev-gif-16453201.gif",
    "https://tenor.com/view/css-awesome-overflow-programming-web-gif-11903654.gif",
    "https://tenor.com/view/hello-world-coding-programmer-first-code-gif-19234561.gif",
    "https://tenor.com/view/python-programming-language-code-snake-gif-15678901.gif",
    "https://tenor.com/view/bug-found-crying-developer-code-fix-gif-21345670.gif",
    "https://tenor.com/view/merge-conflict-git-horror-programmer-gif-19876543.gif",
    "https://tenor.com/view/press-any-key-confused-computer-meme-gif-14765432.gif",
    "https://tenor.com/view/404-not-found-error-internet-meme-gif-13456789.gif",
    "https://tenor.com/view/laughing-so-hard-lol-funny-gif-10172863.gif",
    "https://tenor.com/view/surprised-pikachu-pokemon-meme-gif-14289697.gif",
    "https://tenor.com/view/facepalm-fail-epic-fail-meme-gif-9159873.gif",
    "https://tenor.com/view/bye-felicia-friday-bye-see-ya-gif-9194955.gif",
    "https://tenor.com/view/michael-scott-no-god-no-please-office-gif-4733274.gif",
    "https://tenor.com/view/spongebob-imagination-rainbow-hands-meme-gif-4588481.gif",
    "https://tenor.com/view/crying-laughing-tears-meme-funny-gif-17621052.gif",
    "https://tenor.com/view/that-escalated-quickly-anchorman-ron-burgundy-gif-5362089.gif",
    "https://tenor.com/view/not-today-bye-no-evil-gif-11257374.gif",
    "https://tenor.com/view/kevin-hart-scared-run-running-gif-7657943.gif",
    "https://tenor.com/view/oprah-you-get-a-car-excited-gif-9063247.gif",
    "https://tenor.com/view/aint-nobody-got-time-for-that-sweet-brown-gif-7438311.gif",
    "https://tenor.com/view/dog-this-is-fine-fire-burning-gif-16121564.gif",
    "https://tenor.com/view/elmo-fire-burning-chaos-meme-gif-14124970.gif",
    "https://tenor.com/view/shrug-whatever-idk-dont-care-gif-9164688.gif",
    "https://tenor.com/view/wait-what-confused-huh-gif-11373734.gif",
    "https://tenor.com/view/okay-ok-fine-whatever-gif-13462905.gif",
    "https://tenor.com/view/thinking-hard-meme-confused-gif-15773040.gif",
    "https://tenor.com/view/thats-what-she-said-the-office-michael-scott-gif-5468048.gif",
    "https://tenor.com/view/no-no-no-refuse-meme-gif-14280752.gif",
    "https://tenor.com/view/cat-sleeping-keyboard-programmer-coding-gif-16893012.gif",
    "https://tenor.com/view/cat-watching-screen-monitor-computer-gif-15342091.gif",
    "https://tenor.com/view/grumpy-cat-monday-hate-mornings-gif-14203945.gif",
    "https://tenor.com/view/cat-side-eye-judging-suspicious-gif-18456201.gif",
    "https://tenor.com/view/fat-cat-roll-rolling-chonk-gif-13790234.gif",
    "https://tenor.com/view/cat-startled-jump-scared-fright-gif-11567843.gif",
    "https://tenor.com/view/kitten-cute-tiny-paws-baby-cat-gif-14378921.gif",
    "https://tenor.com/view/cat-boop-nose-paw-touch-gif-15923847.gif",
    "https://tenor.com/view/black-cat-halloween-spooky-cat-gif-13478293.gif",
    "https://tenor.com/view/cat-business-suit-serious-meeting-gif-14567823.gif",
    "https://tenor.com/view/rubber-duck-debugging-programmer-coding-meme-gif-20134567.gif",
    "https://tenor.com/view/keyboard-smash-rage-quit-gaming-frustrated-gif-11238745.gif",
    "https://tenor.com/view/code-review-nightmare-programmer-pull-request-gif-22134568.gif",
    "https://tenor.com/view/works-first-try-shocked-surprised-programmer-gif-19034567.gif",
    "https://tenor.com/view/infinite-loop-forever-looping-programming-gif-15567843.gif",
    "https://tenor.com/view/terminal-hacking-green-text-code-gif-13234567.gif",
    "https://tenor.com/view/deploy-production-friday-bad-idea-developer-gif-21678901.gif",
    "https://tenor.com/view/copy-paste-developer-programmer-meme-gif-18456789.gif",
    "https://tenor.com/view/regex-nightmare-programming-code-meme-gif-16789012.gif",
    "https://tenor.com/view/semicolon-error-javascript-js-programmer-gif-14567890.gif",
    "https://tenor.com/view/meme-laughing-hard-funny-gif-10438562.gif",
    "https://tenor.com/view/wow-amazing-shocked-surprised-reaction-gif-12984573.gif",
    "https://tenor.com/view/rolling-on-floor-laughing-rofl-lmao-gif-11234567.gif",
    "https://tenor.com/view/troll-face-classic-meme-internet-gif-9876543.gif",
    "https://tenor.com/view/y-u-no-meme-rage-face-gif-8765432.gif",
    "https://tenor.com/view/forever-alone-sad-meme-lonely-gif-7654321.gif",
    "https://tenor.com/view/cute-cat-blink-slow-blink-love-gif-16234509.gif",
    "https://tenor.com/view/cat-demands-attention-paw-pet-me-gif-15109823.gif"
  ];

  return (
    <section className="w-full mt-10">
      <div className="flex justify-between items-center mb-4">
        <a href="https://github.com/Kartikayy007" target="_blank" rel="noreferrer" className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity group">
          <h2 className="text-[22px] font-bold text-white">You Might Also Like</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px] text-gray-500 mt-0.5 group-hover:text-white transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </a>
      </div>

      <div className="w-full overflow-x-auto pb-6 scrollbar-hide snap-x">
        <div className="grid grid-rows-2 grid-flow-col gap-x-8 gap-y-4 w-max">
          {otherRepos.map((repo: any) => {
            // Hash the repo ID to get a deterministic random index across all 80+ gifs
            const hash = repo.id ? repo.id % iconGifs.length : Math.floor(Math.random() * iconGifs.length);
            const gifUrl = iconGifs[hash];
            return (
               <div key={repo.id || repo.name} className="w-[300px] md:w-[320px] flex items-center gap-3 snap-center cursor-pointer group">
                <div className={`w-[60px] h-[60px] flex-shrink-0 rounded-[14px] border border-gray-700/50 flex flex-col items-center justify-center shadow-sm overflow-hidden relative bg-[#1c1c1e]`}>
                  <img src={gifUrl} alt="icon-bg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="flex-1 min-w-0 pr-2 border-b border-gray-800/50 pb-2">
                  <h4 className="text-[15px] font-semibold text-[#e5e5e5] leading-tight line-clamp-1 group-hover:text-white transition-colors">{repo.name}</h4>
                  <p className="text-[13px] text-gray-500 line-clamp-1 mt-0.5">{repo.description || "Open Source Repository"}</p>
                </div>

                <a 
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 w-[60px] h-[28px] bg-[#2c2c2e] hover:bg-[#3a3a3c] rounded-full flex items-center justify-center text-[13px] font-bold text-[#1e86ff] transition-colors -my-1 self-center"
                >
                  View
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
