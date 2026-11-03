# Receiving practice

This independent app opens Home > Inbound > a receiving method, then a playable
warehouse. The model, interface, native player and assets are owned by this
repository. Only web/ is published. All quantities and companies are fictional.
The Endpoint Cloud articles below define the practiced software steps.

## Player controls

WASD or arrow keys walk; mouse movement looks around. Hold E to carry a carton
and release E to set it down. Left mouse also carries while the scanner is
stowed. Right mouse rotates a held carton. Q equips or stows the TC22. Hold left
mouse to aim its imager and scan, or press F for a single scan. Right click or
Tab opens the handheld software. Walk to the office monitor and press E for web
receiving. H opens the guide; Escape opens the pause menu.

The browser owns pointer capture. Each capture requires a deliberate user
action. Pause, browser inactivity and the coarse-pointer portrait gate remain
independent. Closing a device retains entered values. There is no timer.

## Architecture and stock

The opening loads only the receiving model and interface. Choosing a lesson
lazily loads one Unity player. Subsequent lessons reuse it. All links and asset
paths are relative to the project site; no personal site or legacy launcher is
loaded. The pages contain no analytics, API credentials or company connection.

The browser model in web/js/one-shift-inbound-model.js is the single receiving
authority. Native mode 5 is selected by OneShiftShell.lesson. The native adapter
creates the exact delivery in REC-02, with one physical carton per EA and real
Code128 labels. It reuses walking, force-based carry, TC22 scanning and the office
camera. It creates no WarehouseWmsRuntime or second ledger.

Before posting a receipt, request a fresh inbound-report. Every delivered unit
must be supported inside REC-02, with nothing held. The native adapter also
rejects newly recorded units outside this location. inbound-sync changes labels
and colors without transporting, cloning or destroying cartons. Only explicit
inbound-setup replaces a lesson fixture. Keep barcodes subject to real geometry,
range, facing and occlusion.

### Receiving contracts

Mobile PO practice follows Receiving > assigned PO > Receive Detail > Receive
Item Detail. Basic receipt records a quantity. Lot and date examples also require
the value on the delivered label. Each valid serial scan records one unit, and
duplicate or unknown serials are rejected. Receipt changes the order to
`Receiving`; receiving the final unit does not silently complete it. Partial
receipts preserve the outstanding amount and offer a path to leave the order open.

ASN practice follows Receive Inventory, an assigned container scan, review and
OK. Looking up the container posts no stock. OK receives every manifest line in
one transaction, retaining its tracking values. The linked article documents
receiving-bin overrides; this physical fixture uses REC-02 throughout. The same
container cannot post twice. ASN receiving is not offered on the web path.

Web practice opens at the physical office monitor using E, then follows Process
Receipt, PO Number and GO. It requires a manually
selected Bin Number, then separate Add Qty Recv'd and Add Qty Damaged values.
COMMIT TRANSACTIONS records good stock in REC-02 and damaged stock under the
`DAMAGE` condition/location in the practice record. Both counts reduce the
outstanding order quantity. The fixture rejects attempts to classify its damaged
unit as good stock. Committing does not remove the red damaged unit from the
dock; this lesson does not perform subsequent physical removal or putaway.

Completing a PO requires an explicit confirmation and never receives missing
units. Without an external integration, completion gives `Receiving Complete`.
For the integrated example it gives `Unassigned`, with export and closure in the
external system still outstanding. Completed practice orders reject further
receipts and Undo. The dedicated completion example starts with all four units
already received. The closing article's table says "Pick Detail" while its
narrative says "Receive Detail"; the practice follows the receiving narrative.

Undo is a training-only correction of the last receipt. It reverses that receipt's
inventory and adds a reversal to the journal; an ASN reverses as one container.
It does not export anything, move cartons or model every production Undo
restriction. Invalid input leaves the record unchanged. Received good plus
damaged plus outstanding must equal ordered; recorded inventory and the net
journal quantities must equal received good plus damaged.

### Knowledge-base map

The owner supplied these articles for the 2026-11-03 implementation:

| Article | Practice scope |
| --- | --- |
| [Receiving Types](https://endpoint.my.site.com/supportportal/s/article/Receiving-Types) | PO and ASN method selection; mobile versus web availability. |
| [Inbound Overview](https://endpoint.my.site.com/supportportal/s/article/Inbound-Overview) | Receiving context and the opening help link. |
| [Receive Items on Mobile](https://endpoint.my.site.com/supportportal/s/article/Receive-Items-on-Mobile) | Assigned PO, item detail, quantity and tracking values. |
| [Receive Purchase Orders with Advanced Ship Notices (ASNs)](https://endpoint.my.site.com/supportportal/s/article/Receive-Purchase-Orders-with-Advanced-Ship-Notices-ASNs) | Container lookup and manifest receipt. The source supports bin override; this fixture stays at REC-02. |
| [Close Purchase Orders from Mobile](https://endpoint.my.site.com/supportportal/s/article/Close-Purchase-Orders-from-Mobile) | Explicit completion and the two integration-dependent statuses. |
| [Receiving on the Web](https://endpoint.my.site.com/supportportal/s/article/Receiving-on-the-Web) | Process Receipt, manual bin selection, good/damaged quantities and commit. |


## Validation and export

Run npm test for the 20 receiving-model and 17 browser-host checks. Run
npm run test:browser for the actual Chrome gameplay walkthrough. The latter
uses mouse, keyboard and normal interface controls, observing the HUD without
injecting scan codes, transforms or transactions. It serves a project subpath
and covers all eight receiving paths, player reuse and pause behavior.

The included native v15 bundle passed 83 native checks and 47 gameplay checks
before extraction. The extraction changes frontend URLs and removes the legacy
launcher; it does not rebuild or alter those four compiled files. Rerun the
project-subpath browser check after migration changes. Reports live in the
ignored research directory.

Open unity/OneShiftRackLab with Unity 6000.3.27f1 and Web Build Support.
WarehouseInboundPracticeValidation.ValidateAndSave() writes the native report;
inspect its passed flag. Exit that Editor process before calling
WarehouseWebBuilder.BuildWeb() in a fresh batch process. The builder exports
to web/assets/one-shift-unity/Build. Keep the exported files and version queries
in the same release. Do not publish an untested native source change.
