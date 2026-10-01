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
    slug: "burger-spot", num: "01", kind: "ai",
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
    slug: "energy-drink-spot", num: "02", kind: "ai",
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
    slug: "snoring-spray-ad", num: "03", kind: "ai",
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
    slug: "ugc-kitchen-ad", num: "04", kind: "ai",
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
    slug: "interior-mood", num: "05", kind: "ai",
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
    slug: "masked-podcast", num: "06", kind: "ai",
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
    slug: "action-bus-scene", num: "07", kind: "ai",
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
    slug: "shaver-spot", num: "08", kind: "ai",
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
    slug: "lowrider-character", num: "09", kind: "ai",
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

  /* ─────────────── МОНТАЖ ─────────────── */

  {
    slug: "sunset-motivation", num: "10", kind: "edit",
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
    slug: "laws-of-power", num: "11", kind: "edit",
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
    slug: "talking-head-grid", num: "12", kind: "edit",
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
    slug: "creator-talking-head", num: "13", kind: "edit",
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
    slug: "text-explainer", num: "14", kind: "edit",
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
    slug: "quiet-lifestyle", num: "15", kind: "edit",
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
    slug: "bw-portrait", num: "16", kind: "edit",
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
    slug: "movie-meme", num: "17", kind: "edit",
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
    slug: "trading-recap", num: "18", kind: "edit",
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
  }

];
