# `lakewatchCommonConfig` Submodule <a name="`lakewatchCommonConfig` Submodule" id="@cdktn/provider-databricks.lakewatchCommonConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchCommonConfig <a name="LakewatchCommonConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config databricks_lakewatch_common_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

new lakewatchCommonConfig.LakewatchCommonConfig(scope: Construct, id: string, config: LakewatchCommonConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig">LakewatchCommonConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig">LakewatchCommonConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetCustomContentPackPath">resetCustomContentPackPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetCustomPresetsPath">resetCustomPresetsPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetPerResourcePermissionsEnabled">resetPerResourcePermissionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.putProviderConfig"></a>

```typescript
public putProviderConfig(value: LakewatchCommonConfigProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a>

---

##### `resetCustomContentPackPath` <a name="resetCustomContentPackPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetCustomContentPackPath"></a>

```typescript
public resetCustomContentPackPath(): void
```

##### `resetCustomPresetsPath` <a name="resetCustomPresetsPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetCustomPresetsPath"></a>

```typescript
public resetCustomPresetsPath(): void
```

##### `resetPerResourcePermissionsEnabled` <a name="resetPerResourcePermissionsEnabled" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetPerResourcePermissionsEnabled"></a>

```typescript
public resetPerResourcePermissionsEnabled(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakewatchCommonConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isConstruct"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

lakewatchCommonConfig.LakewatchCommonConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformElement"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

lakewatchCommonConfig.LakewatchCommonConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformResource"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

lakewatchCommonConfig.LakewatchCommonConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LakewatchCommonConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakewatchCommonConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakewatchCommonConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchCommonConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference">LakewatchCommonConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference">LakewatchCommonConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customContentPackPathInput">customContentPackPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customPresetsPathInput">customPresetsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.perResourcePermissionsEnabledInput">perResourcePermissionsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customContentPackPath">customContentPackPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customPresetsPath">customPresetsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.perResourcePermissionsEnabled">perResourcePermissionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: LakewatchCommonConfigProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference">LakewatchCommonConfigProviderConfigOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.updatedBy"></a>

```typescript
public readonly updatedBy: LakewatchCommonConfigUpdatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference">LakewatchCommonConfigUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `customContentPackPathInput`<sup>Optional</sup> <a name="customContentPackPathInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customContentPackPathInput"></a>

```typescript
public readonly customContentPackPathInput: string;
```

- *Type:* string

---

##### `customPresetsPathInput`<sup>Optional</sup> <a name="customPresetsPathInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customPresetsPathInput"></a>

```typescript
public readonly customPresetsPathInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `perResourcePermissionsEnabledInput`<sup>Optional</sup> <a name="perResourcePermissionsEnabledInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.perResourcePermissionsEnabledInput"></a>

```typescript
public readonly perResourcePermissionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | LakewatchCommonConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a>

---

##### `customContentPackPath`<sup>Required</sup> <a name="customContentPackPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customContentPackPath"></a>

```typescript
public readonly customContentPackPath: string;
```

- *Type:* string

---

##### `customPresetsPath`<sup>Required</sup> <a name="customPresetsPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customPresetsPath"></a>

```typescript
public readonly customPresetsPath: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `perResourcePermissionsEnabled`<sup>Required</sup> <a name="perResourcePermissionsEnabled" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.perResourcePermissionsEnabled"></a>

```typescript
public readonly perResourcePermissionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchCommonConfigConfig <a name="LakewatchCommonConfigConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.Initializer"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

const lakewatchCommonConfigConfig: lakewatchCommonConfig.LakewatchCommonConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#parent LakewatchCommonConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.customContentPackPath">customContentPackPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#custom_content_pack_path LakewatchCommonConfig#custom_content_pack_path}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.customPresetsPath">customPresetsPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#custom_presets_path LakewatchCommonConfig#custom_presets_path}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.perResourcePermissionsEnabled">perResourcePermissionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#per_resource_permissions_enabled LakewatchCommonConfig#per_resource_permissions_enabled}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#provider_config LakewatchCommonConfig#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#parent LakewatchCommonConfig#parent}.

---

##### `customContentPackPath`<sup>Optional</sup> <a name="customContentPackPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.customContentPackPath"></a>

```typescript
public readonly customContentPackPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#custom_content_pack_path LakewatchCommonConfig#custom_content_pack_path}.

---

##### `customPresetsPath`<sup>Optional</sup> <a name="customPresetsPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.customPresetsPath"></a>

```typescript
public readonly customPresetsPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#custom_presets_path LakewatchCommonConfig#custom_presets_path}.

---

##### `perResourcePermissionsEnabled`<sup>Optional</sup> <a name="perResourcePermissionsEnabled" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.perResourcePermissionsEnabled"></a>

```typescript
public readonly perResourcePermissionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#per_resource_permissions_enabled LakewatchCommonConfig#per_resource_permissions_enabled}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: LakewatchCommonConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#provider_config LakewatchCommonConfig#provider_config}.

---

### LakewatchCommonConfigProviderConfig <a name="LakewatchCommonConfigProviderConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig.Initializer"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

const lakewatchCommonConfigProviderConfig: lakewatchCommonConfig.LakewatchCommonConfigProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#workspace_id LakewatchCommonConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#workspace_id LakewatchCommonConfig#workspace_id}.

---

### LakewatchCommonConfigUpdatedBy <a name="LakewatchCommonConfigUpdatedBy" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.Initializer"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

const lakewatchCommonConfigUpdatedBy: lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#display_name LakewatchCommonConfig#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#email LakewatchCommonConfig#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#id LakewatchCommonConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#principal_type LakewatchCommonConfig#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#display_name LakewatchCommonConfig#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#email LakewatchCommonConfig#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#id LakewatchCommonConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#principal_type LakewatchCommonConfig#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchCommonConfigProviderConfigOutputReference <a name="LakewatchCommonConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

new lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchCommonConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a>

---


### LakewatchCommonConfigUpdatedByOutputReference <a name="LakewatchCommonConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer"></a>

```typescript
import { lakewatchCommonConfig } from '@cdktn/provider-databricks'

new lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy">LakewatchCommonConfigUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchCommonConfigUpdatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy">LakewatchCommonConfigUpdatedBy</a>

---



