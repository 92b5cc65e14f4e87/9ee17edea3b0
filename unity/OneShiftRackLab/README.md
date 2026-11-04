# Receiving warehouse source

This Unity 6.3 URP project supplies the playable warehouse for Endpoint Warehouse Simulator.
Open it with Unity 6000.3.27f1 and Web Build Support. The browser frontend is in
../../web and always selects the isolated receiving mode. Read ../../README.md,
../../docs/RECEIVING.md and WAREHOUSE_LIGHTING.md before changes.

## Build

Run WarehouseInboundPracticeValidation.ValidateAndSave() and inspect the passed
field in Assets/RackLab/Reports/inbound-practice-validation.json. For batch work,
exit the validation Editor, then export in a fresh process through
OneShift.RackLab.WarehouseWebBuilder.BuildWeb. The Editor menu is
One Shift > Build browser player.

The export copies four OneShiftWeb.* files to
../../web/assets/one-shift-unity/Build. Keep the native BuildVersion and host
query version in sync, then run npm run test:browser from the repository root.
Changing this Editor export path does not require rebuilding an otherwise
unchanged compiled player.

## Receiving contract

WarehouseInboundPractice receives browser-owned receipt snapshots and constructs
the selected physical delivery. RackWalkController, WarehouseGrabber,
WarehouseWmsScanner and WarehouseComputerTransition provide actual game input,
force-based carry, visible Code128 scans and office use. BrowserLifecycle owns
independent presentation/activity gates. The browser owns pointer capture.

Every delivered unit must be supported inside REC-02 and unheld before receipt.
Native sync changes recorded labels and colors without moving cartons or creating
a second ledger. An explicit setup resets the selected fixture. Actual handling
stays with the player.

The existing OneShift namespaces, source helpers and asset names remain for
compatibility. Some older warehouse components are shared utilities even though
the receiving frontend does not expose the original career, sandbox or demo
launchers. Do not delete those dependencies merely because their modes are
inactive. Unity caches and local Builds are ignored; all required authored
scene assets, packages and project settings are versioned here.
