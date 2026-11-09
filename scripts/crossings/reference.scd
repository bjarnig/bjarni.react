// Renders the scsynth side of test.mjs: reference.wav, 13 generators and WsHear in three
// feedback loops, one per channel. Needs the Crossings UGens installed. Run:
//   sclang scripts/crossings/reference.scd <output dir>   then   CROSSINGS_REF=<output dir> node scripts/crossings/test.mjs
(
var dir = (thisProcess.argv[0] ? "/tmp") +/+ "";
var cases = [
	{ WsGen.ar(220, 0.4, 1.5, 0.3, balance: 0.5) },
	{ WsGen.ar(Dseq([110, 220, 165, 330], inf), Dseq([0.1, 0.4, 0.25], inf), Dseq([0, 1, 2.5, 3], inf), 0.5, Dseq([8, 4, 16], inf), 0.5) },
	{ WsMap.ar(0.97, 60, 1200, 0.3, 0, 0) },
	{ WsMap.ar(0.99, 20, 200, 0.4, 3, 1, 1) },
	{ WsMap.ar(1, 40, 4000, 0.3, 0, 0, 2, 0.8) },
	{ WsMap.ar(Dstutter(32, Dmap(0.97, 0) * 0.35 + 0.65), 40, 1600, 0.3, 0, 0, 2, 0.4, balance: 1) },
	{ WsMap.ar(0.85, 30, 3000, 0.3, 1, 5, 3, 0.6, balance: 1) },
	{ WsMap.ar(0.45, 50, 1000, 0.3, 0, 3, 2, hyst: 0.05, balance: 1) },
	{ RandID.ir(1); RandSeed.ir(1, 42); WsGendy.ar(60, 8000, 1, 0.3, 4, 0.4, 0.3) },
	{ RandID.ir(2); RandSeed.ir(1, 7); WsGroup.ar(55, 0.3, 1, Dseq([2, 3, 5, 7, 11], inf), 0.3, 0.1, 0.3, 1) },
	{ WsNest.ar(0.95, 1, 12, 0.3, 0, 0, 3, 3, 1, 0.5, balance: 1) },
	{ WsNest.ar(0.97, 20, 200, 0.3, 0, 1, 5, 1, 1.5, 0.3, balance: 1) },
	{ WsHear.ar(WsGen.ar(Dseq([150, 300, 220, 410], inf), 0.3), 0.8, 60, 1200, 0.3, couple: 0.7) },
];
var loops = [
	{ |fb| WsHear.ar(LPF.ar(fb, 600), 0.8, 60, 1200, 0.3, couple: 0.5, thresh: 0.001) },
	{ |fb| WsHear.ar(Ringz.ar(fb, 200, 0.05) * 0.1, 0.95, 50, 1000, 0.3, couple: 1, thresh: 0.001) },
	{ |fb| WsHear.ar(DelayN.ar(fb, 0.2, 0.1), 0.8, 60, 1200, 0.3, couple: 0.5) },
];
var defs = cases.collect { |f, i| SynthDef(("c" ++ i).asSymbol, { Out.ar(i, f.value) }) }
	++ loops.collect { |f, i| SynthDef(("h" ++ i).asSymbol, { var fb = LocalIn.ar(1), sig = f.(fb); LocalOut.ar(sig); Out.ar(cases.size + i, sig) }) };
Score.recordNRT(defs.collect { |d| [0.0, [\d_recv, d.asBytes]] } ++ defs.collect { |d, i| [0.0, [\s_new, d.name, 1000 + i, 0, 0]] } ++ [[3, [\c_set, 0, 0]]],
	dir +/+ "reference.osc", dir +/+ "reference.wav", sampleRate: 48000, headerFormat: "WAV", sampleFormat: "float",
	options: ServerOptions.new.numOutputBusChannels_(defs.size).numInputBusChannels_(0), duration: 3, action: { "NRT-DONE".postln; 0.exit });
)
