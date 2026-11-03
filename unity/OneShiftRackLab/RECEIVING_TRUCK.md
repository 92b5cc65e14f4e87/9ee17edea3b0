# Receiving truck

This retained source describes the original delivery truck. The receiving
practice mode disables its delivery simulation. The imported Unity assets remain
self-contained in this project:


- `Assets/RackLab/Models/18-wheeler.fbx` is the original Unity export.
- `ReceivingTruckBuilder` imports the original material colors into URP and
  batches fixed meshes within each original tractor or trailer assembly.
- Eighteen wheel transforms, the steering hierarchy, trailer coupling and both
  rear door pivots remain separate. The arrival rotates the actual wheels.

The original model contains 66,356 triangles and a 16.1544 m trailer box. It is
not stretched to fit the forklift. Its plank floor is 1.3325 m above the road;
the lowest roof bows leave 2.693 m of interior clearance. Compound collision
preserves that floor, ceiling, the side walls and rear opening. The original
doors carry their own collision and rotate around their imported hinge axes
through 270 degrees before the dock plate unlocks.

The floor aligns with the warehouse at world y=0. The rear hinges stop at
z=13.05, and the parked tractor's front reaches approximately z=36. The arrival
starts 13 m farther north. The yard reaches z=60, with the rear fence at z=59.8.
Its ground is y=-1.3325. The separate YARD doorway and ramp allow walking past
the truck without crossing the dock or its door sweep.

Run `WarehouseStartBuilder.Install()` to rebuild the receiving scene from these
sources, then `WarehouseStartBuilder.Validate()` and
`WarehouseReceivingValidation.ValidateAndSave()`. The forklift handling checks
also exercise the actual trailer and its roof clearance. The road truck follows
the arrival path; it is not yet a player-driven vehicle.
