# `disasterRecoveryStableUrl` Submodule <a name="`disasterRecoveryStableUrl` Submodule" id="@cdktn/provider-databricks.disasterRecoveryStableUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryStableUrl <a name="DisasterRecoveryStableUrl" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disaster_recovery_stable_url databricks_disaster_recovery_stable_url}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer"></a>

```typescript
import { disasterRecoveryStableUrl } from '@cdktn/provider-databricks'

new disasterRecoveryStableUrl.DisasterRecoveryStableUrl(scope: Construct, id: string, config: DisasterRecoveryStableUrlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig">DisasterRecoveryStableUrlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig">DisasterRecoveryStableUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DisasterRecoveryStableUrl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isConstruct"></a>

```typescript
import { disasterRecoveryStableUrl } from '@cdktn/provider-databricks'

disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformElement"></a>

```typescript
import { disasterRecoveryStableUrl } from '@cdktn/provider-databricks'

disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformResource"></a>

```typescript
import { disasterRecoveryStableUrl } from '@cdktn/provider-databricks'

disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport"></a>

```typescript
import { disasterRecoveryStableUrl } from '@cdktn/provider-databricks'

disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DisasterRecoveryStableUrl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisasterRecoveryStableUrl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisasterRecoveryStableUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disaster_recovery_stable_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryStableUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.failoverGroupName">failoverGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.initialWorkspaceIdInput">initialWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableUrlIdInput">stableUrlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.initialWorkspaceId">initialWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableUrlId">stableUrlId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `failoverGroupName`<sup>Required</sup> <a name="failoverGroupName" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.failoverGroupName"></a>

```typescript
public readonly failoverGroupName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `initialWorkspaceIdInput`<sup>Optional</sup> <a name="initialWorkspaceIdInput" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.initialWorkspaceIdInput"></a>

```typescript
public readonly initialWorkspaceIdInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `stableUrlIdInput`<sup>Optional</sup> <a name="stableUrlIdInput" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableUrlIdInput"></a>

```typescript
public readonly stableUrlIdInput: string;
```

- *Type:* string

---

##### `initialWorkspaceId`<sup>Required</sup> <a name="initialWorkspaceId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.initialWorkspaceId"></a>

```typescript
public readonly initialWorkspaceId: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `stableUrlId`<sup>Required</sup> <a name="stableUrlId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableUrlId"></a>

```typescript
public readonly stableUrlId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryStableUrlConfig <a name="DisasterRecoveryStableUrlConfig" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.Initializer"></a>

```typescript
import { disasterRecoveryStableUrl } from '@cdktn/provider-databricks'

const disasterRecoveryStableUrlConfig: disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.initialWorkspaceId">initialWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disaster_recovery_stable_url#initial_workspace_id DisasterRecoveryStableUrl#initial_workspace_id}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disaster_recovery_stable_url#parent DisasterRecoveryStableUrl#parent}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.stableUrlId">stableUrlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disaster_recovery_stable_url#stable_url_id DisasterRecoveryStableUrl#stable_url_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `initialWorkspaceId`<sup>Required</sup> <a name="initialWorkspaceId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.initialWorkspaceId"></a>

```typescript
public readonly initialWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disaster_recovery_stable_url#initial_workspace_id DisasterRecoveryStableUrl#initial_workspace_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disaster_recovery_stable_url#parent DisasterRecoveryStableUrl#parent}.

---

##### `stableUrlId`<sup>Required</sup> <a name="stableUrlId" id="@cdktn/provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.stableUrlId"></a>

```typescript
public readonly stableUrlId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disaster_recovery_stable_url#stable_url_id DisasterRecoveryStableUrl#stable_url_id}.

---



