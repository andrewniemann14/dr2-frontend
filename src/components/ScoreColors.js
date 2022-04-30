
export function ScoreColorBg(score) {
  let scoreNum = Number(score);
  switch (true) {
    case (scoreNum < 50):
      return 'bg-neutral-400'
    case (scoreNum < 60):
      return 'bg-neutral-100'
    case (scoreNum < 70):
      return 'bg-green-600'
    case (scoreNum < 80):
      return 'bg-blue-500'
    case (scoreNum < 90):
      return 'bg-violet-500'
    case (scoreNum <= 100):
      return 'bg-amber-500'
    default:
      return 'bg-neutral-100'
  }
}

export function ScoreColorBorder(score) {
  let scoreNum = Number(score);
  switch (true) {
    case (scoreNum < 50):
      return 'border-neutral-400'
    case (scoreNum < 60):
      return 'border-neutral-100'
    case (scoreNum < 70):
      return 'border-green-600'
    case (scoreNum < 80):
      return 'border-blue-500'
    case (scoreNum < 90):
      return 'border-violet-500'
    case (scoreNum <= 100):
      return 'border-amber-500'
    default:
      return 'border-neutral-100'
  }
}

export function ScoreColorStroke(score) {
  let scoreNum = Number(score);
  switch (true) {
    case (scoreNum < 50):
      return 'stroke-neutral-400'
    case (scoreNum < 60):
      return 'stroke-neutral-100'
    case (scoreNum < 70):
      return 'stroke-green-600'
    case (scoreNum < 80):
      return 'stroke-blue-500'
    case (scoreNum < 90):
      return 'stroke-violet-500'
    case (scoreNum <= 100):
      return 'stroke-amber-500'
    default:
      return 'stroke-neutral-100'
  }
}

export function ScoreColorText(score) {
  let scoreNum = Number(score);
  switch (true) {
    case (scoreNum < 50):
      return 'text-neutral-400'
    case (scoreNum < 60):
      return 'text-neutral-100'
    case (scoreNum < 70):
      return 'text-green-600'
    case (scoreNum < 80):
      return 'text-blue-500'
    case (scoreNum < 90):
      return 'text-violet-500'
    case (scoreNum <= 100):
      return 'text-amber-500'
    default:
      return 'text-neutral-100'
  }
}
