# `rfaAccessRequestDestinations` Submodule <a name="`rfaAccessRequestDestinations` Submodule" id="@cdktn/provider-databricks.rfaAccessRequestDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RfaAccessRequestDestinations <a name="RfaAccessRequestDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations databricks_rfa_access_request_destinations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinations(scope: Construct, id: string, config: RfaAccessRequestDestinationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig">RfaAccessRequestDestinationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig">RfaAccessRequestDestinationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable">putSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | RfaAccessRequestDestinationsDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putProviderConfig"></a>

```typescript
public putProviderConfig(value: RfaAccessRequestDestinationsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

---

##### `putSecurable` <a name="putSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable"></a>

```typescript
public putSecurable(value: RfaAccessRequestDestinationsSecurable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RfaAccessRequestDestinations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RfaAccessRequestDestinations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RfaAccessRequestDestinations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RfaAccessRequestDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RfaAccessRequestDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.areAnyDestinationsHidden">areAnyDestinationsHidden</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList">RfaAccessRequestDestinationsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationSourceSecurable">destinationSourceSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference">RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference">RfaAccessRequestDestinationsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securable">securable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference">RfaAccessRequestDestinationsSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableInput">securableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `areAnyDestinationsHidden`<sup>Required</sup> <a name="areAnyDestinationsHidden" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.areAnyDestinationsHidden"></a>

```typescript
public readonly areAnyDestinationsHidden: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinations"></a>

```typescript
public readonly destinations: RfaAccessRequestDestinationsDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList">RfaAccessRequestDestinationsDestinationsList</a>

---

##### `destinationSourceSecurable`<sup>Required</sup> <a name="destinationSourceSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationSourceSecurable"></a>

```typescript
public readonly destinationSourceSecurable: RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference">RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference</a>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfig"></a>

```typescript
public readonly providerConfig: RfaAccessRequestDestinationsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference">RfaAccessRequestDestinationsProviderConfigOutputReference</a>

---

##### `securable`<sup>Required</sup> <a name="securable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securable"></a>

```typescript
public readonly securable: RfaAccessRequestDestinationsSecurableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference">RfaAccessRequestDestinationsSecurableOutputReference</a>

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | RfaAccessRequestDestinationsDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | RfaAccessRequestDestinationsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

---

##### `securableInput`<sup>Optional</sup> <a name="securableInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableInput"></a>

```typescript
public readonly securableInput: IResolvable | RfaAccessRequestDestinationsSecurable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RfaAccessRequestDestinationsConfig <a name="RfaAccessRequestDestinationsConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

const rfaAccessRequestDestinationsConfig: rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.securable">securable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#provider_config RfaAccessRequestDestinations#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `securable`<sup>Required</sup> <a name="securable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.securable"></a>

```typescript
public readonly securable: RfaAccessRequestDestinationsSecurable;
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | RfaAccessRequestDestinationsDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: RfaAccessRequestDestinationsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#provider_config RfaAccessRequestDestinations#provider_config}.

---

### RfaAccessRequestDestinationsDestinations <a name="RfaAccessRequestDestinationsDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

const rfaAccessRequestDestinationsDestinations: rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationId">destinationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#destination_id RfaAccessRequestDestinations#destination_id}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#destination_type RfaAccessRequestDestinations#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.specialDestination">specialDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#special_destination RfaAccessRequestDestinations#special_destination}. |

---

##### `destinationId`<sup>Optional</sup> <a name="destinationId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#destination_id RfaAccessRequestDestinations#destination_id}.

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#destination_type RfaAccessRequestDestinations#destination_type}.

---

##### `specialDestination`<sup>Optional</sup> <a name="specialDestination" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.specialDestination"></a>

```typescript
public readonly specialDestination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#special_destination RfaAccessRequestDestinations#special_destination}.

---

### RfaAccessRequestDestinationsDestinationSourceSecurable <a name="RfaAccessRequestDestinationsDestinationSourceSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

const rfaAccessRequestDestinationsDestinationSourceSecurable: rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.providerShare">providerShare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}. |

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}.

---

##### `providerShare`<sup>Optional</sup> <a name="providerShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.providerShare"></a>

```typescript
public readonly providerShare: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}.

---

### RfaAccessRequestDestinationsProviderConfig <a name="RfaAccessRequestDestinationsProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

const rfaAccessRequestDestinationsProviderConfig: rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#workspace_id RfaAccessRequestDestinations#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#workspace_id RfaAccessRequestDestinations#workspace_id}.

---

### RfaAccessRequestDestinationsSecurable <a name="RfaAccessRequestDestinationsSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

const rfaAccessRequestDestinationsSecurable: rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.providerShare">providerShare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}. |

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}.

---

##### `providerShare`<sup>Optional</sup> <a name="providerShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.providerShare"></a>

```typescript
public readonly providerShare: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### RfaAccessRequestDestinationsDestinationsList <a name="RfaAccessRequestDestinationsDestinationsList" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get"></a>

```typescript
public get(index: number): RfaAccessRequestDestinationsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RfaAccessRequestDestinationsDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

---


### RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference <a name="RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetProviderShare">resetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullName` <a name="resetFullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetFullName"></a>

```typescript
public resetFullName(): void
```

##### `resetProviderShare` <a name="resetProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetProviderShare"></a>

```typescript
public resetProviderShare(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShareInput">providerShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShare">providerShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable">RfaAccessRequestDestinationsDestinationSourceSecurable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `providerShareInput`<sup>Optional</sup> <a name="providerShareInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShareInput"></a>

```typescript
public readonly providerShareInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `providerShare`<sup>Required</sup> <a name="providerShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShare"></a>

```typescript
public readonly providerShare: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RfaAccessRequestDestinationsDestinationSourceSecurable;
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable">RfaAccessRequestDestinationsDestinationSourceSecurable</a>

---


### RfaAccessRequestDestinationsDestinationsOutputReference <a name="RfaAccessRequestDestinationsDestinationsOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId">resetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination">resetSpecialDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationId` <a name="resetDestinationId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId"></a>

```typescript
public resetDestinationId(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```

##### `resetSpecialDestination` <a name="resetSpecialDestination" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination"></a>

```typescript
public resetSpecialDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput">destinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput">specialDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId">destinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination">specialDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationIdInput`<sup>Optional</sup> <a name="destinationIdInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput"></a>

```typescript
public readonly destinationIdInput: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `specialDestinationInput`<sup>Optional</sup> <a name="specialDestinationInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput"></a>

```typescript
public readonly specialDestinationInput: string;
```

- *Type:* string

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `specialDestination`<sup>Required</sup> <a name="specialDestination" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination"></a>

```typescript
public readonly specialDestination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RfaAccessRequestDestinationsDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>

---


### RfaAccessRequestDestinationsProviderConfigOutputReference <a name="RfaAccessRequestDestinationsProviderConfigOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RfaAccessRequestDestinationsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

---


### RfaAccessRequestDestinationsSecurableOutputReference <a name="RfaAccessRequestDestinationsSecurableOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer"></a>

```typescript
import { rfaAccessRequestDestinations } from '@cdktn/provider-databricks'

new rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare">resetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullName` <a name="resetFullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetFullName"></a>

```typescript
public resetFullName(): void
```

##### `resetProviderShare` <a name="resetProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare"></a>

```typescript
public resetProviderShare(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput">providerShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShare">providerShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `providerShareInput`<sup>Optional</sup> <a name="providerShareInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput"></a>

```typescript
public readonly providerShareInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `providerShare`<sup>Required</sup> <a name="providerShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShare"></a>

```typescript
public readonly providerShare: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RfaAccessRequestDestinationsSecurable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---



