# `qualityMonitorV2` Submodule <a name="`qualityMonitorV2` Submodule" id="@cdktn/provider-databricks.qualityMonitorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QualityMonitorV2 <a name="QualityMonitorV2" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2 databricks_quality_monitor_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

new qualityMonitorV2.QualityMonitorV2(scope: Construct, id: string, config: QualityMonitorV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config">QualityMonitorV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config">QualityMonitorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putValidityCheckConfigurations">putValidityCheckConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetValidityCheckConfigurations">resetValidityCheckConfigurations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putProviderConfig"></a>

```typescript
public putProviderConfig(value: QualityMonitorV2ProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a>

---

##### `putValidityCheckConfigurations` <a name="putValidityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putValidityCheckConfigurations"></a>

```typescript
public putValidityCheckConfigurations(value: IResolvable | QualityMonitorV2ValidityCheckConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putValidityCheckConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetValidityCheckConfigurations` <a name="resetValidityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetValidityCheckConfigurations"></a>

```typescript
public resetValidityCheckConfigurations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QualityMonitorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isConstruct"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

qualityMonitorV2.QualityMonitorV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformElement"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

qualityMonitorV2.QualityMonitorV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformResource"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

qualityMonitorV2.QualityMonitorV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

qualityMonitorV2.QualityMonitorV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QualityMonitorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QualityMonitorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QualityMonitorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QualityMonitorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.anomalyDetectionConfig">anomalyDetectionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference">QualityMonitorV2AnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference">QualityMonitorV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.validityCheckConfigurations">validityCheckConfigurations</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList">QualityMonitorV2ValidityCheckConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.validityCheckConfigurationsInput">validityCheckConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `anomalyDetectionConfig`<sup>Required</sup> <a name="anomalyDetectionConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.anomalyDetectionConfig"></a>

```typescript
public readonly anomalyDetectionConfig: QualityMonitorV2AnomalyDetectionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference">QualityMonitorV2AnomalyDetectionConfigOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.providerConfig"></a>

```typescript
public readonly providerConfig: QualityMonitorV2ProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference">QualityMonitorV2ProviderConfigOutputReference</a>

---

##### `validityCheckConfigurations`<sup>Required</sup> <a name="validityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.validityCheckConfigurations"></a>

```typescript
public readonly validityCheckConfigurations: QualityMonitorV2ValidityCheckConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList">QualityMonitorV2ValidityCheckConfigurationsList</a>

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | QualityMonitorV2ProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a>

---

##### `validityCheckConfigurationsInput`<sup>Optional</sup> <a name="validityCheckConfigurationsInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.validityCheckConfigurationsInput"></a>

```typescript
public readonly validityCheckConfigurationsInput: IResolvable | QualityMonitorV2ValidityCheckConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QualityMonitorV2AnomalyDetectionConfig <a name="QualityMonitorV2AnomalyDetectionConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

const qualityMonitorV2AnomalyDetectionConfig: qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames">excludedTableFullNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#excluded_table_full_names QualityMonitorV2#excluded_table_full_names}. |

---

##### `excludedTableFullNames`<sup>Optional</sup> <a name="excludedTableFullNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames"></a>

```typescript
public readonly excludedTableFullNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#excluded_table_full_names QualityMonitorV2#excluded_table_full_names}.

---

### QualityMonitorV2Config <a name="QualityMonitorV2Config" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

const qualityMonitorV2Config: qualityMonitorV2.QualityMonitorV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#object_id QualityMonitorV2#object_id}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#object_type QualityMonitorV2#object_type}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#provider_config QualityMonitorV2#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.validityCheckConfigurations">validityCheckConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#validity_check_configurations QualityMonitorV2#validity_check_configurations}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#object_id QualityMonitorV2#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#object_type QualityMonitorV2#object_type}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.providerConfig"></a>

```typescript
public readonly providerConfig: QualityMonitorV2ProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#provider_config QualityMonitorV2#provider_config}.

---

##### `validityCheckConfigurations`<sup>Optional</sup> <a name="validityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.validityCheckConfigurations"></a>

```typescript
public readonly validityCheckConfigurations: IResolvable | QualityMonitorV2ValidityCheckConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#validity_check_configurations QualityMonitorV2#validity_check_configurations}.

---

### QualityMonitorV2ProviderConfig <a name="QualityMonitorV2ProviderConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

const qualityMonitorV2ProviderConfig: qualityMonitorV2.QualityMonitorV2ProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#workspace_id QualityMonitorV2#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#workspace_id QualityMonitorV2#workspace_id}.

---

### QualityMonitorV2ValidityCheckConfigurations <a name="QualityMonitorV2ValidityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

const qualityMonitorV2ValidityCheckConfigurations: qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#name QualityMonitorV2#name}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck">percentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#percent_null_validity_check QualityMonitorV2#percent_null_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck">rangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#range_validity_check QualityMonitorV2#range_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck">uniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#uniqueness_validity_check QualityMonitorV2#uniqueness_validity_check}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#name QualityMonitorV2#name}.

---

##### `percentNullValidityCheck`<sup>Optional</sup> <a name="percentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck"></a>

```typescript
public readonly percentNullValidityCheck: QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#percent_null_validity_check QualityMonitorV2#percent_null_validity_check}.

---

##### `rangeValidityCheck`<sup>Optional</sup> <a name="rangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck"></a>

```typescript
public readonly rangeValidityCheck: QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#range_validity_check QualityMonitorV2#range_validity_check}.

---

##### `uniquenessValidityCheck`<sup>Optional</sup> <a name="uniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck"></a>

```typescript
public readonly uniquenessValidityCheck: QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#uniqueness_validity_check QualityMonitorV2#uniqueness_validity_check}.

---

### QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck <a name="QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

const qualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck: qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound">upperBound</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#upper_bound QualityMonitorV2#upper_bound}. |

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}.

---

##### `upperBound`<sup>Optional</sup> <a name="upperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound"></a>

```typescript
public readonly upperBound: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#upper_bound QualityMonitorV2#upper_bound}.

---

### QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck <a name="QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

const qualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck: qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound">lowerBound</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#lower_bound QualityMonitorV2#lower_bound}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound">upperBound</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#upper_bound QualityMonitorV2#upper_bound}. |

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}.

---

##### `lowerBound`<sup>Optional</sup> <a name="lowerBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound"></a>

```typescript
public readonly lowerBound: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#lower_bound QualityMonitorV2#lower_bound}.

---

##### `upperBound`<sup>Optional</sup> <a name="upperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound"></a>

```typescript
public readonly upperBound: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#upper_bound QualityMonitorV2#upper_bound}.

---

### QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck <a name="QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

const qualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck: qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}. |

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### QualityMonitorV2AnomalyDetectionConfigOutputReference <a name="QualityMonitorV2AnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

new qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">resetExcludedTableFullNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedTableFullNames` <a name="resetExcludedTableFullNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```typescript
public resetExcludedTableFullNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId">lastRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus">latestRunStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">excludedTableFullNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames">excludedTableFullNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig">QualityMonitorV2AnomalyDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastRunId`<sup>Required</sup> <a name="lastRunId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId"></a>

```typescript
public readonly lastRunId: string;
```

- *Type:* string

---

##### `latestRunStatus`<sup>Required</sup> <a name="latestRunStatus" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus"></a>

```typescript
public readonly latestRunStatus: string;
```

- *Type:* string

---

##### `excludedTableFullNamesInput`<sup>Optional</sup> <a name="excludedTableFullNamesInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```typescript
public readonly excludedTableFullNamesInput: string[];
```

- *Type:* string[]

---

##### `excludedTableFullNames`<sup>Required</sup> <a name="excludedTableFullNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```typescript
public readonly excludedTableFullNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QualityMonitorV2AnomalyDetectionConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig">QualityMonitorV2AnomalyDetectionConfig</a>

---


### QualityMonitorV2ProviderConfigOutputReference <a name="QualityMonitorV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

new qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorV2ProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a>

---


### QualityMonitorV2ValidityCheckConfigurationsList <a name="QualityMonitorV2ValidityCheckConfigurationsList" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

new qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.get"></a>

```typescript
public get(index: number): QualityMonitorV2ValidityCheckConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorV2ValidityCheckConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]

---


### QualityMonitorV2ValidityCheckConfigurationsOutputReference <a name="QualityMonitorV2ValidityCheckConfigurationsOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

new qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck">putPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck">putRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck">putUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck">resetPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck">resetRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck">resetUniquenessValidityCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPercentNullValidityCheck` <a name="putPercentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck"></a>

```typescript
public putPercentNullValidityCheck(value: QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `putRangeValidityCheck` <a name="putRangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck"></a>

```typescript
public putRangeValidityCheck(value: QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `putUniquenessValidityCheck` <a name="putUniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck"></a>

```typescript
public putUniquenessValidityCheck(value: QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPercentNullValidityCheck` <a name="resetPercentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck"></a>

```typescript
public resetPercentNullValidityCheck(): void
```

##### `resetRangeValidityCheck` <a name="resetRangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck"></a>

```typescript
public resetRangeValidityCheck(): void
```

##### `resetUniquenessValidityCheck` <a name="resetUniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck"></a>

```typescript
public resetUniquenessValidityCheck(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck">percentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck">rangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck">uniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput">percentNullValidityCheckInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput">rangeValidityCheckInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput">uniquenessValidityCheckInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentNullValidityCheck`<sup>Required</sup> <a name="percentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck"></a>

```typescript
public readonly percentNullValidityCheck: QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a>

---

##### `rangeValidityCheck`<sup>Required</sup> <a name="rangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck"></a>

```typescript
public readonly rangeValidityCheck: QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a>

---

##### `uniquenessValidityCheck`<sup>Required</sup> <a name="uniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck"></a>

```typescript
public readonly uniquenessValidityCheck: QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `percentNullValidityCheckInput`<sup>Optional</sup> <a name="percentNullValidityCheckInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput"></a>

```typescript
public readonly percentNullValidityCheckInput: IResolvable | QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `rangeValidityCheckInput`<sup>Optional</sup> <a name="rangeValidityCheckInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput"></a>

```typescript
public readonly rangeValidityCheckInput: IResolvable | QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `uniquenessValidityCheckInput`<sup>Optional</sup> <a name="uniquenessValidityCheckInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput"></a>

```typescript
public readonly uniquenessValidityCheckInput: IResolvable | QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorV2ValidityCheckConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>

---


### QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference <a name="QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

new qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound">resetUpperBound</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetUpperBound` <a name="resetUpperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound"></a>

```typescript
public resetUpperBound(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput">upperBoundInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound">upperBound</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `upperBoundInput`<sup>Optional</sup> <a name="upperBoundInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput"></a>

```typescript
public readonly upperBoundInput: number;
```

- *Type:* number

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `upperBound`<sup>Required</sup> <a name="upperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound"></a>

```typescript
public readonly upperBound: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---


### QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference <a name="QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

new qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound">resetLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound">resetUpperBound</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetLowerBound` <a name="resetLowerBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound"></a>

```typescript
public resetLowerBound(): void
```

##### `resetUpperBound` <a name="resetUpperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound"></a>

```typescript
public resetUpperBound(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput">lowerBoundInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput">upperBoundInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound">lowerBound</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound">upperBound</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `lowerBoundInput`<sup>Optional</sup> <a name="lowerBoundInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput"></a>

```typescript
public readonly lowerBoundInput: number;
```

- *Type:* number

---

##### `upperBoundInput`<sup>Optional</sup> <a name="upperBoundInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput"></a>

```typescript
public readonly upperBoundInput: number;
```

- *Type:* number

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `lowerBound`<sup>Required</sup> <a name="lowerBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound"></a>

```typescript
public readonly lowerBound: number;
```

- *Type:* number

---

##### `upperBound`<sup>Required</sup> <a name="upperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound"></a>

```typescript
public readonly upperBound: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---


### QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference <a name="QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer"></a>

```typescript
import { qualityMonitorV2 } from '@cdktn/provider-databricks'

new qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---



