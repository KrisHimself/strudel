// "Resonance"
// song @by Home
// script @by KRistmets
setcps(80/60/4)

let chords = {X1:"F3, Ab3, C4, Eb4", X2:"Ab3, C4, Eb4, G4", X3:"C4, Eb4, G4, Bb4", 
           X4:"F3, Ab3, C4, Eb4", X5:"Bb3, Db4, F4", X6:"Ab3, C4, Eb4, G4"}

let chordEffects = register('chordEffects', (x, pat) => pat
  .gain(1.6 - (1.1*x))
  .lpf(400 + (x * 300))
  .lpa(.4)
  .attack(.055)
  .decay(0.5 + x*0.4)
  .sustain(x)
  .release(x*0.1)
  .detune("5")
  .lpenv(x * -2.2)
  .vibrato("0.3:0.2")
)


$chords: "i1".pickRestart(
  {i1: `[X1@2 X1@2 X1@1.5]@2.75 [X2*2]@2 [X3*6]@6 [X4@2 X4@2 X4@1.5]@2.75 [X5*2]@2 [X6*6]@6`}
  ).slow(4).pickOut(chords).note().s("sawtooth")
  .chordEffects(cosine.slow(2.3), sine).gain(0.6)
  ._pianoroll()

$bass: note("[F1@2 F1@2 F1@1.5]@2.75 [Ab1*2]@2 [C2*6]@6 [F1@2 F1@2 F1@1.5]@2.75 [Bb1*2]@2 [Ab1*6]@6")
  .s("square, sine").slow(4).mask("<0 1 1 1>/4").gain(1).lpf(200)
  ._pianoroll()


$drums: "< - 0 1 1>/4".pick([
  "<[- - - -]@3.75 [sd sd - sd]@0.25>@0.25",
  "bd*4, [- sd]*2, [- hh hh -]*4"
]).pickOut({
  bd: s("bd").gain(0.7).lpf(1500),
  sd: s("sd:4").gain(0.6).lpf(1500),
  hh: s("hh").gain(1).lpf(1900)
})._punchcard()
