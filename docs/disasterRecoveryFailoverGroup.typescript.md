# `disasterRecoveryFailoverGroup` Submodule <a name="`disasterRecoveryFailoverGroup` Submodule" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryFailoverGroup <a name="DisasterRecoveryFailoverGroup" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group databricks_disaster_recovery_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup(scope: Construct, id: string, config: DisasterRecoveryFailoverGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig">DisasterRecoveryFailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig">DisasterRecoveryFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putUnityCatalogAssets">putUnityCatalogAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putWorkspaceSets">putWorkspaceSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetUnityCatalogAssets">resetUnityCatalogAssets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUnityCatalogAssets` <a name="putUnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putUnityCatalogAssets"></a>

```typescript
public putUnityCatalogAssets(value: DisasterRecoveryFailoverGroupUnityCatalogAssets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putUnityCatalogAssets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

---

##### `putWorkspaceSets` <a name="putWorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putWorkspaceSets"></a>

```typescript
public putWorkspaceSets(value: IResolvable | DisasterRecoveryFailoverGroupWorkspaceSets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putWorkspaceSets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]

---

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetUnityCatalogAssets` <a name="resetUnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetUnityCatalogAssets"></a>

```typescript
public resetUnityCatalogAssets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisasterRecoveryFailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisasterRecoveryFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.effectivePrimaryRegion">effectivePrimaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.replicationPoint">replicationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssets">unityCatalogAssets</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSets">workspaceSets</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList">DisasterRecoveryFailoverGroupWorkspaceSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupIdInput">failoverGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegionInput">initialPrimaryRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssetsInput">unityCatalogAssetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSetsInput">workspaceSetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupId">failoverGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegion">initialPrimaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectivePrimaryRegion`<sup>Required</sup> <a name="effectivePrimaryRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.effectivePrimaryRegion"></a>

```typescript
public readonly effectivePrimaryRegion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replicationPoint`<sup>Required</sup> <a name="replicationPoint" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.replicationPoint"></a>

```typescript
public readonly replicationPoint: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `unityCatalogAssets`<sup>Required</sup> <a name="unityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssets"></a>

```typescript
public readonly unityCatalogAssets: DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workspaceSets`<sup>Required</sup> <a name="workspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSets"></a>

```typescript
public readonly workspaceSets: DisasterRecoveryFailoverGroupWorkspaceSetsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList">DisasterRecoveryFailoverGroupWorkspaceSetsList</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `failoverGroupIdInput`<sup>Optional</sup> <a name="failoverGroupIdInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupIdInput"></a>

```typescript
public readonly failoverGroupIdInput: string;
```

- *Type:* string

---

##### `initialPrimaryRegionInput`<sup>Optional</sup> <a name="initialPrimaryRegionInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegionInput"></a>

```typescript
public readonly initialPrimaryRegionInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `unityCatalogAssetsInput`<sup>Optional</sup> <a name="unityCatalogAssetsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssetsInput"></a>

```typescript
public readonly unityCatalogAssetsInput: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

---

##### `workspaceSetsInput`<sup>Optional</sup> <a name="workspaceSetsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSetsInput"></a>

```typescript
public readonly workspaceSetsInput: IResolvable | DisasterRecoveryFailoverGroupWorkspaceSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `failoverGroupId`<sup>Required</sup> <a name="failoverGroupId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupId"></a>

```typescript
public readonly failoverGroupId: string;
```

- *Type:* string

---

##### `initialPrimaryRegion`<sup>Required</sup> <a name="initialPrimaryRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegion"></a>

```typescript
public readonly initialPrimaryRegion: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryFailoverGroupConfig <a name="DisasterRecoveryFailoverGroupConfig" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

const disasterRecoveryFailoverGroupConfig: disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.failoverGroupId">failoverGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#failover_group_id DisasterRecoveryFailoverGroup#failover_group_id}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.initialPrimaryRegion">initialPrimaryRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#initial_primary_region DisasterRecoveryFailoverGroup#initial_primary_region}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#parent DisasterRecoveryFailoverGroup#parent}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#regions DisasterRecoveryFailoverGroup#regions}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.workspaceSets">workspaceSets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#workspace_sets DisasterRecoveryFailoverGroup#workspace_sets}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#etag DisasterRecoveryFailoverGroup#etag}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.unityCatalogAssets">unityCatalogAssets</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#unity_catalog_assets DisasterRecoveryFailoverGroup#unity_catalog_assets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `failoverGroupId`<sup>Required</sup> <a name="failoverGroupId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.failoverGroupId"></a>

```typescript
public readonly failoverGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#failover_group_id DisasterRecoveryFailoverGroup#failover_group_id}.

---

##### `initialPrimaryRegion`<sup>Required</sup> <a name="initialPrimaryRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.initialPrimaryRegion"></a>

```typescript
public readonly initialPrimaryRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#initial_primary_region DisasterRecoveryFailoverGroup#initial_primary_region}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#parent DisasterRecoveryFailoverGroup#parent}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#regions DisasterRecoveryFailoverGroup#regions}.

---

##### `workspaceSets`<sup>Required</sup> <a name="workspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.workspaceSets"></a>

```typescript
public readonly workspaceSets: IResolvable | DisasterRecoveryFailoverGroupWorkspaceSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#workspace_sets DisasterRecoveryFailoverGroup#workspace_sets}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#etag DisasterRecoveryFailoverGroup#etag}.

---

##### `unityCatalogAssets`<sup>Optional</sup> <a name="unityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.unityCatalogAssets"></a>

```typescript
public readonly unityCatalogAssets: DisasterRecoveryFailoverGroupUnityCatalogAssets;
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#unity_catalog_assets DisasterRecoveryFailoverGroup#unity_catalog_assets}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssets <a name="DisasterRecoveryFailoverGroupUnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

const disasterRecoveryFailoverGroupUnityCatalogAssets: disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs">catalogs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#catalogs DisasterRecoveryFailoverGroup#catalogs}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet">dataReplicationWorkspaceSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#data_replication_workspace_set DisasterRecoveryFailoverGroup#data_replication_workspace_set}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings">locationMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#location_mappings DisasterRecoveryFailoverGroup#location_mappings}. |

---

##### `catalogs`<sup>Required</sup> <a name="catalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs"></a>

```typescript
public readonly catalogs: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#catalogs DisasterRecoveryFailoverGroup#catalogs}.

---

##### `dataReplicationWorkspaceSet`<sup>Required</sup> <a name="dataReplicationWorkspaceSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet"></a>

```typescript
public readonly dataReplicationWorkspaceSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#data_replication_workspace_set DisasterRecoveryFailoverGroup#data_replication_workspace_set}.

---

##### `locationMappings`<sup>Optional</sup> <a name="locationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings"></a>

```typescript
public readonly locationMappings: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#location_mappings DisasterRecoveryFailoverGroup#location_mappings}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

const disasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs: disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

const disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings: disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion">uriByRegion</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#uri_by_region DisasterRecoveryFailoverGroup#uri_by_region}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}.

---

##### `uriByRegion`<sup>Required</sup> <a name="uriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion"></a>

```typescript
public readonly uriByRegion: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#uri_by_region DisasterRecoveryFailoverGroup#uri_by_region}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

const disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion: disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#region DisasterRecoveryFailoverGroup#region}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#uri DisasterRecoveryFailoverGroup#uri}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#region DisasterRecoveryFailoverGroup#region}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#uri DisasterRecoveryFailoverGroup#uri}.

---

### DisasterRecoveryFailoverGroupWorkspaceSets <a name="DisasterRecoveryFailoverGroupWorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

const disasterRecoveryFailoverGroupWorkspaceSets: disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets">replicateWorkspaceAssets</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#replicate_workspace_assets DisasterRecoveryFailoverGroup#replicate_workspace_assets}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds">workspaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#workspace_ids DisasterRecoveryFailoverGroup#workspace_ids}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames">stableUrlNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#stable_url_names DisasterRecoveryFailoverGroup#stable_url_names}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}.

---

##### `replicateWorkspaceAssets`<sup>Required</sup> <a name="replicateWorkspaceAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets"></a>

```typescript
public readonly replicateWorkspaceAssets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#replicate_workspace_assets DisasterRecoveryFailoverGroup#replicate_workspace_assets}.

---

##### `workspaceIds`<sup>Required</sup> <a name="workspaceIds" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#workspace_ids DisasterRecoveryFailoverGroup#workspace_ids}.

---

##### `stableUrlNames`<sup>Optional</sup> <a name="stableUrlNames" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames"></a>

```typescript
public readonly stableUrlNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/disaster_recovery_failover_group#stable_url_names DisasterRecoveryFailoverGroup#stable_url_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion">putUriByRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUriByRegion` <a name="putUriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion"></a>

```typescript
public putUriByRegion(value: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion">uriByRegion</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput">uriByRegionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriByRegion`<sup>Required</sup> <a name="uriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion"></a>

```typescript
public readonly uriByRegion: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList;
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `uriByRegionInput`<sup>Optional</sup> <a name="uriByRegionInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput"></a>

```typescript
public readonly uriByRegionInput: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get"></a>

```typescript
public get(index: number): DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs">putCatalogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings">putLocationMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings">resetLocationMappings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalogs` <a name="putCatalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs"></a>

```typescript
public putCatalogs(value: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

---

##### `putLocationMappings` <a name="putLocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings"></a>

```typescript
public putLocationMappings(value: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

---

##### `resetLocationMappings` <a name="resetLocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings"></a>

```typescript
public resetLocationMappings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs">catalogs</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings">locationMappings</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput">catalogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput">dataReplicationWorkspaceSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput">locationMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet">dataReplicationWorkspaceSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogs`<sup>Required</sup> <a name="catalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs"></a>

```typescript
public readonly catalogs: DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a>

---

##### `locationMappings`<sup>Required</sup> <a name="locationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings"></a>

```typescript
public readonly locationMappings: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a>

---

##### `catalogsInput`<sup>Optional</sup> <a name="catalogsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput"></a>

```typescript
public readonly catalogsInput: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

---

##### `dataReplicationWorkspaceSetInput`<sup>Optional</sup> <a name="dataReplicationWorkspaceSetInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput"></a>

```typescript
public readonly dataReplicationWorkspaceSetInput: string;
```

- *Type:* string

---

##### `locationMappingsInput`<sup>Optional</sup> <a name="locationMappingsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput"></a>

```typescript
public readonly locationMappingsInput: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

---

##### `dataReplicationWorkspaceSet`<sup>Required</sup> <a name="dataReplicationWorkspaceSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet"></a>

```typescript
public readonly dataReplicationWorkspaceSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryFailoverGroupUnityCatalogAssets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

---


### DisasterRecoveryFailoverGroupWorkspaceSetsList <a name="DisasterRecoveryFailoverGroupWorkspaceSetsList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryFailoverGroupWorkspaceSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]

---


### DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference <a name="DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryFailoverGroup } from '@cdktn/provider-databricks'

new disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames">resetStableUrlNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStableUrlNames` <a name="resetStableUrlNames" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames"></a>

```typescript
public resetStableUrlNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput">replicateWorkspaceAssetsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput">stableUrlNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput">workspaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets">replicateWorkspaceAssets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames">stableUrlNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds">workspaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `replicateWorkspaceAssetsInput`<sup>Optional</sup> <a name="replicateWorkspaceAssetsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput"></a>

```typescript
public readonly replicateWorkspaceAssetsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stableUrlNamesInput`<sup>Optional</sup> <a name="stableUrlNamesInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput"></a>

```typescript
public readonly stableUrlNamesInput: string[];
```

- *Type:* string[]

---

##### `workspaceIdsInput`<sup>Optional</sup> <a name="workspaceIdsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput"></a>

```typescript
public readonly workspaceIdsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replicateWorkspaceAssets`<sup>Required</sup> <a name="replicateWorkspaceAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets"></a>

```typescript
public readonly replicateWorkspaceAssets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stableUrlNames`<sup>Required</sup> <a name="stableUrlNames" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames"></a>

```typescript
public readonly stableUrlNames: string[];
```

- *Type:* string[]

---

##### `workspaceIds`<sup>Required</sup> <a name="workspaceIds" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryFailoverGroupWorkspaceSets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>

---



