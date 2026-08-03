# `materializedFeaturesFeatureTag` Submodule <a name="`materializedFeaturesFeatureTag` Submodule" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaterializedFeaturesFeatureTag <a name="MaterializedFeaturesFeatureTag" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag databricks_materialized_features_feature_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

new materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag(scope: Construct, id: string, config: MaterializedFeaturesFeatureTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig">MaterializedFeaturesFeatureTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig">MaterializedFeaturesFeatureTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.putProviderConfig"></a>

```typescript
public putProviderConfig(value: MaterializedFeaturesFeatureTagProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MaterializedFeaturesFeatureTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MaterializedFeaturesFeatureTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MaterializedFeaturesFeatureTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference">MaterializedFeaturesFeatureTagProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.providerConfig"></a>

```typescript
public readonly providerConfig: MaterializedFeaturesFeatureTagProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference">MaterializedFeaturesFeatureTagProviderConfigOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | MaterializedFeaturesFeatureTagProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaterializedFeaturesFeatureTagConfig <a name="MaterializedFeaturesFeatureTagConfig" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.Initializer"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

const materializedFeaturesFeatureTagConfig: materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag#provider_config MaterializedFeaturesFeatureTag#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: MaterializedFeaturesFeatureTagProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag#provider_config MaterializedFeaturesFeatureTag#provider_config}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}.

---

### MaterializedFeaturesFeatureTagProviderConfig <a name="MaterializedFeaturesFeatureTagProviderConfig" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig.Initializer"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

const materializedFeaturesFeatureTagProviderConfig: materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag#workspace_id MaterializedFeaturesFeatureTag#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/materialized_features_feature_tag#workspace_id MaterializedFeaturesFeatureTag#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaterializedFeaturesFeatureTagProviderConfigOutputReference <a name="MaterializedFeaturesFeatureTagProviderConfigOutputReference" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer"></a>

```typescript
import { materializedFeaturesFeatureTag } from '@cdktn/provider-databricks'

new materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MaterializedFeaturesFeatureTagProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a>

---



