// "Loo nimi??"
// song @by autor???
// script @by KRistmets
setcpm(40)


let hands = {
  rh1: "[C4 D4 C4 D4, G4] [C4 D4 C4 D4, E4]",
  lh1: "C2 F2, C3",
  rh2: "[D4 E4 D4 E4, F4] [D4 E4 C4 D4, - - E4 F4]",
  lh2: "Bb2, F3",
  rh3: "[C4 D4 C4 D4, E4] [C4 D4 C4 D4, G4]",
  lh3: "A2, F3 E3",
  rh4: "[Bb3 D4 Bb3 D4, A4] [Bb3 D4 Bb3 D4, G4 F4]",
  lh4: "G2, D3 - G3 F3",
  rh5: "[A3 C4 A3 C4, G4] [A3 C4 A3 C4, E4 F4]",
  lh5: "F2, G3 - E3 F3",
  rh6: "[G3 Bb3 G3 Bb3, F4 - - Eb4] [G3 Bb3 G3 Bb3, D4 C4]",
  lh6: "Eb2 Bb2, F3",
  rh7: "[D4 C4 D4 C4, G4] [D4 C4, Gb4]",
  lh7: "D2@1.5 A2@0.5 D2@2, D3 D3",
  rh8: "[A3 B3 A3 B3, D4] [G3, D4 - E4@2]",
  lh8: "G2, D3",
}
 
piano: "<msr1 msr2 msr3 msr4 msr5 msr6 msr7 msr8>".pickRestart({
  msr1: `<rh1, lh1>`,
  msr2: `<rh2, lh2>`,
  msr3: `<rh3, lh3>`,
  msr4: `<rh4, lh4>`,
  msr5: `<rh5, lh5>`,
  msr6: `<rh6, lh6>`,
  msr7: `<rh7, lh7>`,
  msr8: `<rh8, lh8>`
}).pick(hands).note().s("piano").slow(2)._pianoroll()
