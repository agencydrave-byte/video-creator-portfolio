/* ═══════════════════════════════════════════════════════════════════
   СПИСОК РАБОТ — единственное место, где они описаны.
   Отсюда страница берёт карточки, кнопки-фильтры и окно просмотра.

   Порядок на странице: сначала сделанное через ИИ, потом чистый монтаж.

   kind:   "ai" — сделано через ИИ, "edit" — чистый монтаж
   ratio:  "9/16" вертикальное, "16/9" горизонтальное
   file:   видео в public/media/video/ (mp4, до 25 МиБ — предел Cloudflare)
   poster: кадр-превью в public/media/posters/
   embed:  если вместо файла появится ссылка на YouTube/Vimeo

   Чтобы добавить работу — скопируй соседний объект и смени slug, num и тексты.
   Пережать новое видео под веб:
     ffmpeg -i in.mp4 -vf "scale='min(iw,if(gt(iw,ih),1920,1080))':-2" -c:v libx264 \
       -crf 23 -preset faster -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart out.mp4
   ═══════════════════════════════════════════════════════════════════ */

window.WORKS = [

  /* ─────────────── СДЕЛАНО ЧЕРЕЗ ИИ ─────────────── */

  {
    slug: "coffee-machine-spot", num: "01", kind: "ai",
    name: "Coffee machine spot",
    sub: "AI-generated · product",
    ratio: "16/9",
    poster: "media/posters/coffee-machine-spot.webp",
    file: "media/video/coffee-machine-spot.mp4",
    embed: null,
    tags: ["Product", "Macro", "Steam"],
    brief: "A commercial for a capsule machine: beans falling, steam, a capsule dropping into place — the kind of table-top work that normally needs a studio, a rig and a day.",
    did: [
      "Generated each beat as its own shot — beans, brew, steam — instead of asking for the whole ad at once.",
      "Kept one light direction and one teal-and-amber palette so the shots cut together as one spot.",
      "Held the machine shape and the branding steady, since that is where generated product shots usually fall apart.",
      "Cut on the movement of the beans and let the steam carry the last frame."
    ]
  },

  {
    slug: "animated-short", num: "02", kind: "ai",
    name: "Animated short",
    sub: "AI-generated · 3D style",
    ratio: "16/9",
    poster: "media/posters/animated-short.webp",
    file: "media/video/animated-short.mp4",
    embed: null,
    tags: ["Characters", "Story", "Continuity"],
    brief: "A minute of animation in a big-studio 3D style: a boy, his mother and a dog, carried through a whole little story — far longer than generated video usually stays consistent.",
    did: [
      "Locked every character as a reference sheet before a single shot was generated.",
      "Wrote the story in beats so each shot had a job and the cut could not wander.",
      "Threw out any take where a face, a costume or the house changed, and generated it again.",
      "Graded the shots to one warm daylight look and cut the music to the story, not the other way round."
    ]
  },

  {
    slug: "ai-presenter-promo", num: "03", kind: "ai",
    name: "Studio promo with a presenter",
    sub: "AI-generated · presenter",
    ratio: "16/9",
    poster: "media/posters/ai-presenter-promo.webp",
    file: "media/video/ai-presenter-promo.mp4",
    embed: null,
    tags: ["Presenter", "Lip sync", "Motion graphics"],
    brief: "A promo for a video studio, presented by someone who does not exist — he walks an office, an edit suite and a wall of screens, and has to stay the same man in all of them.",
    did: [
      "Fixed the presenter face, suit and build in references first, then generated every location around him.",
      "Matched the camera height and the lens feel across the shots so the walk reads as one space.",
      "Composited the brand screens and the graphics on top rather than asking the model for readable text.",
      "Cut to the rhythm of the voice-over and ended on the logo wall."
    ]
  },

  {
    slug: "burger-spot", num: "04", kind: "ai",
    name: "Food spot: burger",
    sub: "AI-generated · food",
    ratio: "16/9",
    poster: "media/posters/burger-spot.webp",
    file: "media/video/burger-spot.mp4",
    embed: null,
    tags: ["Food", "Smoke", "Close-up"],
    brief: "Food shot in the way food is always shot — dark background, steam, one hero angle — except nothing was cooked.",
    did: [
      "Prompted for the texture first: the crust, the melt and the char are what make it read as food.",
      "Kept the smoke moving slowly so the shot has life without looking generated.",
      "Held the camera close and still — wide moves break the illusion.",
      "Graded it warm against the dark background and cut on the steam."
    ]
  },

  {
    slug: "energy-drink-spot", num: "05", kind: "ai",
    name: "Energy drink spot",
    sub: "AI-generated · product",
    ratio: "16/9",
    poster: "media/posters/energy-drink-spot.webp",
    file: "media/video/energy-drink-spot.mp4",
    embed: null,
    tags: ["Product", "VFX look", "Fast cut"],
    brief: "A can, ice and a swirl of light — the kind of spot that is normally a VFX job, done as generation plus an edit.",
    did: [
      "Built the shot around one move so the effect has a direction instead of just churning.",
      "Kept the can straight and readable while everything around it moves.",
      "Cut the energy up with a hard beat and a short tail.",
      "Matched the blue of the effect to the product so it looks lit, not pasted."
    ]
  },

  {
    slug: "snoring-spray-ad", num: "06", kind: "ai",
    name: "Animated product ad",
    sub: "AI-generated · story ad",
    ratio: "9/16",
    poster: "media/posters/snoring-spray-ad.webp",
    file: "media/video/snoring-spray-ad.mp4",
    embed: null,
    tags: ["Story ad", "Captions", "Voice-over"],
    brief: "A direct-response ad that has to tell a small story — problem, product, relief — inside twenty seconds, in a style friendly enough to watch at night.",
    did: [
      "Wrote the script in Claude Code around one problem and one promise.",
      "Generated the scene in a soft animated style, so the subject stays comfortable to watch.",
      "Put the claim on screen as a caption at the exact moment it is said.",
      "Kept the product visible in the frame where the promise lands."
    ]
  },

  {
    slug: "ugc-kitchen-ad", num: "07", kind: "ai",
    name: "UGC-style ad",
    sub: "AI-generated · spokesperson",
    ratio: "9/16",
    poster: "media/posters/ugc-kitchen-ad.webp",
    file: "media/video/ugc-kitchen-ad.mp4",
    embed: null,
    tags: ["Higgsfield", "Claude Code", "No shoot"],
    brief: "An ad that looks like a person filming themselves at home — with no person, no home and no camera. The test is whether it survives being watched twice.",
    did: [
      "Wrote the script in Claude Code so it sounds spoken, not written.",
      "Generated the presenter and the room, keeping the same face and lighting across every shot.",
      "Cut around the frames where the lip sync drifts — that is what gives these away.",
      "Finished it like real UGC: slightly handheld framing, room tone, captions."
    ]
  },

  {
    slug: "interior-mood", num: "08", kind: "ai",
    name: "Interior mood piece",
    sub: "AI-generated · architecture",
    ratio: "9/16",
    poster: "media/posters/interior-mood.webp",
    file: "media/video/interior-mood.mp4",
    embed: null,
    tags: ["Prompting", "Continuity", "Soft grade"],
    brief: "A calm interior walk-through where the whole effect rests on the light staying believable from shot to shot.",
    did: [
      "Locked the room, the materials and the time of day in reference images before generating motion.",
      "Kept the camera slow — generated footage falls apart fastest in fast moves.",
      "Threw out every take where the furniture or the plants changed shape.",
      "Graded the shots together and let the ambience carry the sound."
    ]
  },

  {
    slug: "masked-podcast", num: "09", kind: "ai",
    name: "Masked podcast bit",
    sub: "AI-generated · talking characters",
    ratio: "16/9",
    poster: "media/posters/masked-podcast.webp",
    file: "media/video/masked-podcast.mp4",
    embed: null,
    tags: ["Characters", "Lip sync", "Two-shot"],
    brief: "Two characters talking to each other on camera — generated, which means they have to keep their faces, their clothes and their positions for the whole take.",
    did: [
      "Built both characters from fixed references so they stay the same people shot to shot.",
      "Generated the conversation in pieces and matched the gestures across the joins.",
      "Timed the voices so the two actually react to each other rather than take turns.",
      "Kept one background and one light setup to hold the scene together."
    ]
  },

  {
    slug: "action-bus-scene", num: "10", kind: "ai",
    name: "Action scene",
    sub: "AI-generated · fan edit",
    ratio: "16/9",
    poster: "media/posters/action-bus-scene.webp",
    file: "media/video/action-bus-scene.mp4",
    embed: null,
    tags: ["Storyboard", "Continuity", "Sound design"],
    brief: "A fight scene in a moving bus: several angles of the same confined space, which is exactly where generated video usually loses the plot.",
    did: [
      "Storyboarded the beats first so every shot knew what came before it.",
      "Kept the geography consistent — same bus, same people, same side of the frame.",
      "Cut on movement to carry the energy across shots that were generated separately.",
      "Built the sound from scratch: engine, impacts, room — that is most of what sells it."
    ]
  },

  {
    slug: "shaver-spot", num: "11", kind: "ai",
    name: "Product spot: shaver",
    sub: "AI-generated · product",
    ratio: "9/16",
    poster: "media/posters/shaver-spot.webp",
    file: "media/video/shaver-spot.mp4",
    embed: null,
    tags: ["Product", "Studio look", "8 seconds"],
    brief: "A studio product shot with no studio: stone plinth, controlled light, one slow move around the object.",
    did: [
      "Prompted for a single clean light setup rather than a dramatic one — product has to read.",
      "Kept the product shape and the screen detail stable through the whole move.",
      "Cut it to eight seconds, which is all a product turn needs.",
      "Added the sound of the device so the picture does not feel dead."
    ]
  },

  {
    slug: "lowrider-character", num: "12", kind: "ai",
    name: "Animated character",
    sub: "AI-generated · stylised",
    ratio: "9/16",
    poster: "media/posters/lowrider-character.webp",
    file: "media/video/lowrider-character.mp4",
    embed: null,
    tags: ["Character", "Stylised", "Music"],
    brief: "A stylised animated character driving, held together for half a minute — long by the standards of generated video.",
    did: [
      "Locked the character design first, then generated the shots around it.",
      "Kept one art direction — same palette, same light, same level of detail — across every cut.",
      "Matched the motion to the music so the loop feels intentional.",
      "Dropped every take where the face or the hands drifted."
    ]
  },


  {
    slug: "cinematic-stunt-scene", num: "13", kind: "ai",
    name: "Cinematic scene",
    sub: "AI-generated · comedy",
    ratio: "16/9",
    poster: "media/posters/cinematic-stunt-scene.webp",
    file: "media/video/cinematic-stunt-scene.mp4",
    embed: null,
    tags: ["Night interior", "Scale gag", "Sound design"],
    brief: "A night-time break-in played as a joke, with two characters at wildly different scales in the same frame — the shot generated video is worst at.",
    did: [
      "Storyboarded the gag so the scale difference reads instantly in every angle.",
      "Kept one house, one time of night and one key light across all the shots.",
      "Cut on impacts so the separately generated angles feel like one continuous scene.",
      "Built the sound — doors, debris, room — because the comedy lands on the timing of the hits."
    ]
  },

  {
    slug: "sports-drink-spot", num: "14", kind: "ai",
    name: "Sports drink spot",
    sub: "AI-generated · sport",
    ratio: "9/16",
    poster: "media/posters/sports-drink-spot.webp",
    file: "media/video/sports-drink-spot.mp4",
    embed: null,
    tags: ["Product", "Sport", "Daylight"],
    brief: "A park workout that ends on the bottle: running, a handstand, a drink — all generated, cut at the pace of a real sports ad.",
    did: [
      "Kept one athlete, one park and one time of day so the shots belong to the same morning.",
      "Generated the camera low and close to the movement, where generated motion is most convincing.",
      "Held the bottle label steady in the shots where the product has to read.",
      "Cut on effort — each shot leaves at the peak of the move."
    ]
  },

  {
    slug: "stratus-force-spot", num: "15", kind: "ai",
    name: "STRATUS FORCE teaser",
    sub: "AI-generated · brand teaser",
    ratio: "9/16",
    poster: "media/posters/stratus-force-spot.webp",
    file: "media/video/stratus-force-spot.mp4",
    embed: null,
    tags: ["Backlight", "Brand", "Eight seconds"],
    brief: "Eight seconds of sunset: an athlete catching his breath against the light, and the brand name landing on the last beat.",
    did: [
      "Built the whole thing on one backlit setup, so the sun does the grading.",
      "Generated the breathing and the recovery rather than the effort — the quiet beat sells the exhaustion.",
      "Held the silhouette clean so the type has somewhere to sit.",
      "Brought the name in on the final move and cut before it outstays."
    ]
  },

  {
    slug: "bathroom-ugc-talk", num: "16", kind: "ai",
    name: "Spokesperson cut",
    sub: "AI-generated · spokesperson",
    ratio: "9/16",
    poster: "media/posters/bathroom-ugc-talk.webp",
    file: "media/video/bathroom-ugc-talk.mp4",
    embed: null,
    tags: ["Avatar", "Lip sync", "Punch-ins"],
    brief: "A presenter talking to camera in a home bathroom — generated, then cut like a real selfie take so the performance does not feel even.",
    did: [
      "Built the avatar from fixed references so the face, hair and clothes hold for the whole take.",
      "Generated the speech in pieces and cut out the frames where the lip sync drifts.",
      "Hid the joins behind punch-ins, which is what makes a generated take read as one.",
      "Kept the room light and the mirror reflection consistent across every shot."
    ]
  },

  {
    slug: "car-selfie-reel", num: "17", kind: "ai",
    name: "Captioned selfie reel",
    sub: "AI-generated · spokesperson",
    ratio: "9/16",
    poster: "media/posters/car-selfie-reel.webp",
    file: "media/video/car-selfie-reel.mp4",
    embed: null,
    tags: ["Avatar", "Captions", "Short form"],
    brief: "A phone-in-the-car selfie that was never filmed: one line, eleven seconds, and the caption timing doing the rest.",
    did: [
      "Generated the presenter and the car interior together, so the light through the windows stays put.",
      "Kept the hands in frame — generated hands are the first thing to fall apart, so the shots that held were the ones used.",
      "Broke the line into caption cards that change on the beat of the speech.",
      "Trimmed the tail at the punchline instead of letting the take run out."
    ]
  },

  {
    slug: "sportswear-run-reel", num: "18", kind: "ai",
    name: "Sportswear reel",
    sub: "AI-generated · sport",
    ratio: "9/16",
    poster: "media/posters/sportswear-run-reel.webp",
    file: "media/video/sportswear-run-reel.mp4",
    embed: null,
    tags: ["Avatar", "Match cuts", "Grade"],
    brief: "A running spot generated shot by shot — wide city, feet, a jump, a whip across the road — then cut so the energy carries through.",
    did: [
      "Generated each beat separately and kept one athlete, one outfit and one city across all of them.",
      "Built the piece on movement: every cut leaves on a move and lands on one.",
      "Matched the blacks and the skin tones so shots from different generations read as one shoot.",
      "Timed the whole thing to the track, with the product shot on the biggest hit."
    ]
  },

  {
    slug: "tennis-product-ugc", num: "19", kind: "ai",
    name: "Product UGC cut",
    sub: "AI-generated · UGC ad",
    ratio: "9/16",
    poster: "media/posters/tennis-product-ugc.webp",
    file: "media/video/tennis-product-ugc.mp4",
    embed: null,
    tags: ["Avatar", "Story beats", "Call to action"],
    brief: "Store to court in twelve seconds, with no store, no court and no camera: a small generated story that has to survive being watched twice.",
    did: [
      "Generated the shots as a journey rather than a montage, so the product gets a before and an after.",
      "Held the same person, bag and packaging through every shot — that is where these usually give themselves away.",
      "Cut on the hands, so each shot passes the object to the next one.",
      "Finished it like real UGC: slightly handheld framing, one pinned call-to-action line."
    ]
  },

  {
    slug: "logo-reveal-3d", num: "20", kind: "ai",
    name: "3D logo reveal",
    sub: "AI-generated · brand mark",
    ratio: "16/9",
    poster: "media/posters/logo-reveal-3d.webp",
    file: "media/video/logo-reveal-3d.mp4",
    embed: null,
    tags: ["3D look", "Lighting", "Sound design"],
    brief: "A metal-and-neon logo build for a gaming brand: the mark assembles in the dark, the characters step in, the name lands.",
    did: [
      "Generated the mark and the room around it instead of modelling and rendering them.",
      "Kept one hard key and a red rim so the metal reads as a material, not as an effect.",
      "Timed the assembly to the sound design, with the hit landing on the finished mark.",
      "Held the final frame long enough to be screenshotted and used as an avatar."
    ]
  },

  /* ─────────────── МОНТАЖ ─────────────── */

  {
    slug: "sunset-motivation", num: "21", kind: "edit",
    name: "Sunset motivation reel",
    sub: "Instagram Reels · 40 sec",
    ratio: "9/16",
    poster: "media/posters/sunset-motivation.webp",
    file: "media/video/sunset-motivation.mp4",
    embed: null,
    tags: ["Vertical", "Captions", "Music sync"],
    brief: "A spoken idea carried by footage that was never shot for it. The picture sets the mood, the captions carry the meaning, and the two have to land at the same moment.",
    did: [
      "Picked shots that match the line being spoken, not just the pretty ones.",
      "Timed every caption change to the voice, so the viewer reads at the speed of speech.",
      "Highlighted the key words in colour — the point survives with the sound off.",
      "Graded the clips into one warm look and cut the music to the same beat."
    ]
  },

  {
    slug: "laws-of-power", num: "22", kind: "edit",
    name: "48 Laws of Power",
    sub: "Instagram Reels · book quote",
    ratio: "9/16",
    poster: "media/posters/laws-of-power.webp",
    file: "media/video/laws-of-power.mp4",
    embed: null,
    tags: ["Collage", "Typography", "Short form"],
    brief: "A quote from a book turned into eleven seconds that still feel composed rather than rushed.",
    did: [
      "Built the frame as a collage: tilted cards, dark background, one idea at a time.",
      "Set the type so the quote reads in one breath, with the two load-bearing words in colour.",
      "Moved the cards in with the beat instead of fading them.",
      "Kept the whole thing under twelve seconds — a quote stops working if it outstays."
    ]
  },

  {
    slug: "talking-head-grid", num: "23", kind: "edit",
    name: "Talking head on a grid",
    sub: "Instagram Reels · 30 sec",
    ratio: "9/16",
    poster: "media/posters/talking-head-grid.webp",
    file: "media/video/talking-head-grid.mp4",
    embed: null,
    tags: ["Reframing", "Captions", "Repost format"],
    brief: "Horizontal source footage that had to live in a vertical feed without black bars and without cropping the speaker out of frame.",
    did: [
      "Set the speaker in a framed window over a moving grid, so the vertical space works instead of sitting empty.",
      "Cut out the pauses and restarts — the thought runs straight through.",
      "Added captions in the account's own style and a line pointing to the channel in the profile.",
      "Kept the voice level even across the whole cut."
    ]
  },

  {
    slug: "creator-talking-head", num: "24", kind: "edit",
    name: "Creator talking head",
    sub: "Instagram Reels · 20 sec",
    ratio: "9/16",
    poster: "media/posters/creator-talking-head.webp",
    file: "media/video/creator-talking-head.mp4",
    embed: null,
    tags: ["Close-up", "Captions", "Pacing"],
    brief: "Twenty seconds built from a longer talk: one idea, no filler, close enough that the face does the work.",
    did: [
      "Found the single line worth a reel and cut everything that led up to it.",
      "Hid the joins behind punch-ins so the talk reads as one take.",
      "Put the key phrase in a highlighted caption at the moment it is said.",
      "Framed the speaker for vertical with the eyes on the upper third."
    ]
  },

  {
    slug: "text-explainer", num: "25", kind: "edit",
    name: "Text-driven explainer",
    sub: "Vertical · 90 sec",
    ratio: "9/16",
    poster: "media/posters/text-explainer.webp",
    file: "media/video/text-explainer.mp4",
    embed: null,
    tags: ["Typography", "Long form", "Motion"],
    brief: "A minute and a half with no footage at all — the whole thing is type, timing and motion, and it still has to hold attention to the end.",
    did: [
      "Broke the script into numbered beats so the viewer always knows where they are.",
      "Gave the piece one visual system — grid, two colours, one typeface — and never broke it.",
      "Animated each line in on the voice, with enough air between beats to read.",
      "Kept the longest shot short enough that the cut never stalls."
    ]
  },

  {
    slug: "quiet-lifestyle", num: "26", kind: "edit",
    name: "Quiet lifestyle reel",
    sub: "Instagram Reels · 25 sec",
    ratio: "9/16",
    poster: "media/posters/quiet-lifestyle.webp",
    file: "media/video/quiet-lifestyle.mp4",
    embed: null,
    tags: ["Soft grade", "Ambience", "Captions"],
    brief: "A calm, slow format where the edit has to stay invisible: cuts you notice would break the mood the footage is selling.",
    did: [
      "Cut on movement rather than on the beat, so nothing jumps.",
      "Graded everything into one soft, warm palette with the highlights pulled back.",
      "Kept the captions small and low-contrast to match the footage.",
      "Chose music that sits under the room sound instead of covering it."
    ]
  },

  {
    slug: "bw-portrait", num: "27", kind: "edit",
    name: "Black and white cut",
    sub: "TikTok · 15 sec",
    ratio: "9/16",
    poster: "media/posters/bw-portrait.webp",
    file: "media/video/bw-portrait.mp4",
    embed: null,
    tags: ["Mono grade", "Portrait", "Short form"],
    brief: "Phone footage shot in a hallway, turned into something that looks deliberate.",
    did: [
      "Took it to black and white to lose the mixed indoor colour that gave the phone away.",
      "Cut the clip to the moment that actually carries it and dropped the rest.",
      "Kept the grain so it reads as a choice rather than as bad light.",
      "Framed the portrait so the empty side of the frame is doing something."
    ]
  },

  {
    slug: "movie-meme", num: "28", kind: "edit",
    name: "Movie meme cut",
    sub: "TikTok · 20 sec",
    ratio: "9/16",
    poster: "media/posters/movie-meme.webp",
    file: "media/video/movie-meme.mp4",
    embed: null,
    tags: ["Meme format", "Captions", "Timing"],
    brief: "A film scene reused as a punchline. The whole job is timing: the caption has to arrive a beat before the reaction.",
    did: [
      "Found the exact frame where the joke lands and built the cut backwards from it.",
      "Set the caption to appear just before the reaction, not with it.",
      "Rounded the footage into a card so it reads as a quote, not as a rip.",
      "Trimmed the tail the moment the laugh is over."
    ]
  },

  {
    slug: "trading-recap", num: "29", kind: "edit",
    name: "Trading recap",
    sub: "Horizontal · screen recording",
    ratio: "16/9",
    poster: "media/posters/trading-recap.webp",
    file: "media/video/trading-recap.mp4",
    embed: null,
    tags: ["Screen capture", "Zoom-ins", "Captions"],
    brief: "A screen recording of a chart — the hardest kind of footage to keep watchable, because nothing in the frame moves on its own.",
    did: [
      "Zoomed into the part of the chart being talked about instead of showing the whole screen.",
      "Cut out every pause between thoughts so the commentary runs continuously.",
      "Added captions, since this gets watched without sound more often than not.",
      "Kept the interface readable at the size it will actually be viewed."
    ]
  },


  {
    slug: "czech-news-explainer", num: "30", kind: "edit",
    name: "Explainer on a grid",
    sub: "Instagram Reels · 27 sec",
    ratio: "9/16",
    poster: "media/posters/czech-news-explainer.webp",
    file: "media/video/czech-news-explainer.mp4",
    embed: null,
    tags: ["Reframing", "Subtitles", "Inserts"],
    brief: "A horizontal talk rebuilt for a vertical feed in Czech: the speaker in a window on a moving grid, with the thing he is talking about shown beside him.",
    did: [
      "Set the speaker in a framed window so the vertical space is used instead of padded.",
      "Cut the inserts — the chart, the numbers — in exactly on the words they belong to.",
      "Subtitled the whole thing in Czech and highlighted the load-bearing words.",
      "Kept the channel line on screen without letting it fight the captions."
    ]
  },

  {
    slug: "creatine-podcast-cut", num: "31", kind: "edit",
    name: "Podcast cut-down",
    sub: "Instagram Reels · 35 sec",
    ratio: "9/16",
    poster: "media/posters/creatine-podcast-cut.webp",
    file: "media/video/creatine-podcast-cut.mp4",
    embed: null,
    tags: ["Reframing", "Hook", "Captions"],
    brief: "A long podcast reduced to the one answer worth clipping, with an opening built to stop the scroll before the talking starts.",
    did: [
      "Found the clip inside the episode — the claim, the reason, the turn — and cut around it.",
      "Opened on a graphic hook so the first second promises what the clip delivers.",
      "Reframed the horizontal footage to vertical, cutting between the angles on the beats.",
      "Set big captions on the key words so the clip works muted in the feed."
    ]
  },

  {
    slug: "journal-motion-reel", num: "32", kind: "edit",
    name: "App promo, motion only",
    sub: "Vertical · 24 sec",
    ratio: "9/16",
    poster: "media/posters/journal-motion-reel.webp",
    file: "media/video/journal-motion-reel.mp4",
    embed: null,
    tags: ["Motion design", "UI", "Typography"],
    brief: "A promo for a trading journal made without a single frame of footage: interface pieces, type and numbers, animated into four claims.",
    did: [
      "Rebuilt the product interface as animated cards instead of filming the screen.",
      "Gave the piece one system — dark ground, one green accent, one typeface — and kept to it.",
      "Animated each claim in on its line and cleared the frame before the next one.",
      "Kept every beat short enough that the viewer finishes reading exactly as it leaves."
    ]
  },
];
