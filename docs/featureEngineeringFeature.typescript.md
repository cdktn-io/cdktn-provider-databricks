# `featureEngineeringFeature` Submodule <a name="`featureEngineeringFeature` Submodule" id="@cdktn/provider-databricks.featureEngineeringFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringFeature <a name="FeatureEngineeringFeature" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature databricks_feature_engineering_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeature(scope: Construct, id: string, config: FeatureEngineeringFeatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig">FeatureEngineeringFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig">FeatureEngineeringFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction">putFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putLineageContext">putLineageContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetFilterCondition">resetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetLineageContext">resetLineageContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFunction` <a name="putFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction"></a>

```typescript
public putFunction(value: FeatureEngineeringFeatureFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---

##### `putLineageContext` <a name="putLineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putLineageContext"></a>

```typescript
public putLineageContext(value: FeatureEngineeringFeatureLineageContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putLineageContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putProviderConfig"></a>

```typescript
public putProviderConfig(value: FeatureEngineeringFeatureProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource"></a>

```typescript
public putSource(value: FeatureEngineeringFeatureSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow"></a>

```typescript
public putTimeWindow(value: FeatureEngineeringFeatureTimeWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilterCondition` <a name="resetFilterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetFilterCondition"></a>

```typescript
public resetFilterCondition(): void
```

##### `resetLineageContext` <a name="resetLineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetLineageContext"></a>

```typescript
public resetLineageContext(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetTimeWindow"></a>

```typescript
public resetTimeWindow(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FeatureEngineeringFeature resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

featureEngineeringFeature.FeatureEngineeringFeature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FeatureEngineeringFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FeatureEngineeringFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FeatureEngineeringFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.function">function</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference">FeatureEngineeringFeatureFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lineageContext">lineageContext</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference">FeatureEngineeringFeatureLineageContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference">FeatureEngineeringFeatureProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.source">source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference">FeatureEngineeringFeatureSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference">FeatureEngineeringFeatureTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterConditionInput">filterConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.functionInput">functionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputsInput">inputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lineageContextInput">lineageContextInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindowInput">timeWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterCondition">filterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputs">inputs</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.function"></a>

```typescript
public readonly function: FeatureEngineeringFeatureFunctionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference">FeatureEngineeringFeatureFunctionOutputReference</a>

---

##### `lineageContext`<sup>Required</sup> <a name="lineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lineageContext"></a>

```typescript
public readonly lineageContext: FeatureEngineeringFeatureLineageContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference">FeatureEngineeringFeatureLineageContextOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.providerConfig"></a>

```typescript
public readonly providerConfig: FeatureEngineeringFeatureProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference">FeatureEngineeringFeatureProviderConfigOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.source"></a>

```typescript
public readonly source: FeatureEngineeringFeatureSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference">FeatureEngineeringFeatureSourceOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindow"></a>

```typescript
public readonly timeWindow: FeatureEngineeringFeatureTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference">FeatureEngineeringFeatureTimeWindowOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterConditionInput`<sup>Optional</sup> <a name="filterConditionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterConditionInput"></a>

```typescript
public readonly filterConditionInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.functionInput"></a>

```typescript
public readonly functionInput: IResolvable | FeatureEngineeringFeatureFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputsInput"></a>

```typescript
public readonly inputsInput: string[];
```

- *Type:* string[]

---

##### `lineageContextInput`<sup>Optional</sup> <a name="lineageContextInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lineageContextInput"></a>

```typescript
public readonly lineageContextInput: IResolvable | FeatureEngineeringFeatureLineageContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | FeatureEngineeringFeatureProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | FeatureEngineeringFeatureSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: IResolvable | FeatureEngineeringFeatureTimeWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filterCondition`<sup>Required</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringFeatureConfig <a name="FeatureEngineeringFeatureConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureConfig: featureEngineeringFeature.FeatureEngineeringFeatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.function">function</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#function FeatureEngineeringFeature#function}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.inputs">inputs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#inputs FeatureEngineeringFeature#inputs}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#source FeatureEngineeringFeature#source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#description FeatureEngineeringFeature#description}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.filterCondition">filterCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lineageContext">lineageContext</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#lineage_context FeatureEngineeringFeature#lineage_context}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#provider_config FeatureEngineeringFeature#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}.

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.function"></a>

```typescript
public readonly function: FeatureEngineeringFeatureFunction;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#function FeatureEngineeringFeature#function}.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#inputs FeatureEngineeringFeature#inputs}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.source"></a>

```typescript
public readonly source: FeatureEngineeringFeatureSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#source FeatureEngineeringFeature#source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#description FeatureEngineeringFeature#description}.

---

##### `filterCondition`<sup>Optional</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.filterCondition"></a>

```typescript
public readonly filterCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}.

---

##### `lineageContext`<sup>Optional</sup> <a name="lineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lineageContext"></a>

```typescript
public readonly lineageContext: FeatureEngineeringFeatureLineageContext;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#lineage_context FeatureEngineeringFeature#lineage_context}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: FeatureEngineeringFeatureProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#provider_config FeatureEngineeringFeature#provider_config}.

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeWindow"></a>

```typescript
public readonly timeWindow: FeatureEngineeringFeatureTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}.

---

### FeatureEngineeringFeatureFunction <a name="FeatureEngineeringFeatureFunction" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunction: featureEngineeringFeature.FeatureEngineeringFeatureFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.functionType">functionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#function_type FeatureEngineeringFeature#function_type}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.extraParameters">extraParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#extra_parameters FeatureEngineeringFeature#extra_parameters}. |

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.functionType"></a>

```typescript
public readonly functionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#function_type FeatureEngineeringFeature#function_type}.

---

##### `extraParameters`<sup>Optional</sup> <a name="extraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.extraParameters"></a>

```typescript
public readonly extraParameters: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#extra_parameters FeatureEngineeringFeature#extra_parameters}.

---

### FeatureEngineeringFeatureFunctionExtraParameters <a name="FeatureEngineeringFeatureFunctionExtraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureFunctionExtraParameters: featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#key FeatureEngineeringFeature#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#value FeatureEngineeringFeature#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#key FeatureEngineeringFeature#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#value FeatureEngineeringFeature#value}.

---

### FeatureEngineeringFeatureLineageContext <a name="FeatureEngineeringFeatureLineageContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureLineageContext: featureEngineeringFeature.FeatureEngineeringFeatureLineageContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.property.jobContext">jobContext</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#job_context FeatureEngineeringFeature#job_context}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.property.notebookId">notebookId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#notebook_id FeatureEngineeringFeature#notebook_id}. |

---

##### `jobContext`<sup>Optional</sup> <a name="jobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.property.jobContext"></a>

```typescript
public readonly jobContext: FeatureEngineeringFeatureLineageContextJobContext;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#job_context FeatureEngineeringFeature#job_context}.

---

##### `notebookId`<sup>Optional</sup> <a name="notebookId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext.property.notebookId"></a>

```typescript
public readonly notebookId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#notebook_id FeatureEngineeringFeature#notebook_id}.

---

### FeatureEngineeringFeatureLineageContextJobContext <a name="FeatureEngineeringFeatureLineageContextJobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureLineageContextJobContext: featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.property.jobId">jobId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#job_id FeatureEngineeringFeature#job_id}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.property.jobRunId">jobRunId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#job_run_id FeatureEngineeringFeature#job_run_id}. |

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.property.jobId"></a>

```typescript
public readonly jobId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#job_id FeatureEngineeringFeature#job_id}.

---

##### `jobRunId`<sup>Optional</sup> <a name="jobRunId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext.property.jobRunId"></a>

```typescript
public readonly jobRunId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#job_run_id FeatureEngineeringFeature#job_run_id}.

---

### FeatureEngineeringFeatureProviderConfig <a name="FeatureEngineeringFeatureProviderConfig" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureProviderConfig: featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#workspace_id FeatureEngineeringFeature#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#workspace_id FeatureEngineeringFeature#workspace_id}.

---

### FeatureEngineeringFeatureSource <a name="FeatureEngineeringFeatureSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSource: featureEngineeringFeature.FeatureEngineeringFeatureSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#delta_table_source FeatureEngineeringFeature#delta_table_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.kafkaSource">kafkaSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#kafka_source FeatureEngineeringFeature#kafka_source}. |

---

##### `deltaTableSource`<sup>Optional</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: FeatureEngineeringFeatureSourceDeltaTableSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#delta_table_source FeatureEngineeringFeature#delta_table_source}.

---

##### `kafkaSource`<sup>Optional</sup> <a name="kafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.kafkaSource"></a>

```typescript
public readonly kafkaSource: FeatureEngineeringFeatureSourceKafkaSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#kafka_source FeatureEngineeringFeature#kafka_source}.

---

### FeatureEngineeringFeatureSourceDeltaTableSource <a name="FeatureEngineeringFeatureSourceDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceDeltaTableSource: featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#entity_columns FeatureEngineeringFeature#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}. |

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#entity_columns FeatureEngineeringFeature#entity_columns}.

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}.

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}.

---

### FeatureEngineeringFeatureSourceKafkaSource <a name="FeatureEngineeringFeatureSourceKafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceKafkaSource: featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.entityColumnIdentifiers">entityColumnIdentifiers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#entity_column_identifiers FeatureEngineeringFeature#entity_column_identifiers}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.timeseriesColumnIdentifier">timeseriesColumnIdentifier</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#timeseries_column_identifier FeatureEngineeringFeature#timeseries_column_identifier}. |

---

##### `entityColumnIdentifiers`<sup>Required</sup> <a name="entityColumnIdentifiers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.entityColumnIdentifiers"></a>

```typescript
public readonly entityColumnIdentifiers: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#entity_column_identifiers FeatureEngineeringFeature#entity_column_identifiers}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}.

---

##### `timeseriesColumnIdentifier`<sup>Required</sup> <a name="timeseriesColumnIdentifier" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource.property.timeseriesColumnIdentifier"></a>

```typescript
public readonly timeseriesColumnIdentifier: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#timeseries_column_identifier FeatureEngineeringFeature#timeseries_column_identifier}.

---

### FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers <a name="FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers: featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}. |

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}.

---

### FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier <a name="FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier: featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}. |

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}.

---

### FeatureEngineeringFeatureTimeWindow <a name="FeatureEngineeringFeatureTimeWindow" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureTimeWindow: featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.continuous">continuous</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.sliding">sliding</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}. |

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.continuous"></a>

```typescript
public readonly continuous: FeatureEngineeringFeatureTimeWindowContinuous;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}.

---

##### `sliding`<sup>Optional</sup> <a name="sliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.sliding"></a>

```typescript
public readonly sliding: FeatureEngineeringFeatureTimeWindowSliding;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}.

---

##### `tumbling`<sup>Optional</sup> <a name="tumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.tumbling"></a>

```typescript
public readonly tumbling: FeatureEngineeringFeatureTimeWindowTumbling;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}.

---

### FeatureEngineeringFeatureTimeWindowContinuous <a name="FeatureEngineeringFeatureTimeWindowContinuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureTimeWindowContinuous: featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.offset">offset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}. |

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}.

---

### FeatureEngineeringFeatureTimeWindowSliding <a name="FeatureEngineeringFeatureTimeWindowSliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureTimeWindowSliding: featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.slideDuration">slideDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |

---

##### `slideDuration`<sup>Required</sup> <a name="slideDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.slideDuration"></a>

```typescript
public readonly slideDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}.

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

### FeatureEngineeringFeatureTimeWindowTumbling <a name="FeatureEngineeringFeatureTimeWindowTumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

const featureEngineeringFeatureTimeWindowTumbling: featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling.property.windowDuration">windowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringFeatureFunctionExtraParametersList <a name="FeatureEngineeringFeatureFunctionExtraParametersList" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get"></a>

```typescript
public get(index: number): FeatureEngineeringFeatureFunctionExtraParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

---


### FeatureEngineeringFeatureFunctionExtraParametersOutputReference <a name="FeatureEngineeringFeatureFunctionExtraParametersOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>

---


### FeatureEngineeringFeatureFunctionOutputReference <a name="FeatureEngineeringFeatureFunctionOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters">putExtraParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters">resetExtraParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParameters` <a name="putExtraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters"></a>

```typescript
public putExtraParameters(value: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

---

##### `resetExtraParameters` <a name="resetExtraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters"></a>

```typescript
public resetExtraParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParameters">extraParameters</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList">FeatureEngineeringFeatureFunctionExtraParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput">extraParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput">functionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionType">functionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraParameters`<sup>Required</sup> <a name="extraParameters" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParameters"></a>

```typescript
public readonly extraParameters: FeatureEngineeringFeatureFunctionExtraParametersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList">FeatureEngineeringFeatureFunctionExtraParametersList</a>

---

##### `extraParametersInput`<sup>Optional</sup> <a name="extraParametersInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput"></a>

```typescript
public readonly extraParametersInput: IResolvable | FeatureEngineeringFeatureFunctionExtraParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

---

##### `functionTypeInput`<sup>Optional</sup> <a name="functionTypeInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput"></a>

```typescript
public readonly functionTypeInput: string;
```

- *Type:* string

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionType"></a>

```typescript
public readonly functionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureFunction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---


### FeatureEngineeringFeatureLineageContextJobContextOutputReference <a name="FeatureEngineeringFeatureLineageContextJobContextOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobRunId">resetJobRunId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobId` <a name="resetJobId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobId"></a>

```typescript
public resetJobId(): void
```

##### `resetJobRunId` <a name="resetJobRunId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.resetJobRunId"></a>

```typescript
public resetJobRunId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobIdInput">jobIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunIdInput">jobRunIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobId">jobId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunId">jobRunId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: number;
```

- *Type:* number

---

##### `jobRunIdInput`<sup>Optional</sup> <a name="jobRunIdInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunIdInput"></a>

```typescript
public readonly jobRunIdInput: number;
```

- *Type:* number

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobId"></a>

```typescript
public readonly jobId: number;
```

- *Type:* number

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.jobRunId"></a>

```typescript
public readonly jobRunId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureLineageContextJobContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a>

---


### FeatureEngineeringFeatureLineageContextOutputReference <a name="FeatureEngineeringFeatureLineageContextOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.putJobContext">putJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resetJobContext">resetJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resetNotebookId">resetNotebookId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJobContext` <a name="putJobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.putJobContext"></a>

```typescript
public putJobContext(value: FeatureEngineeringFeatureLineageContextJobContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.putJobContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a>

---

##### `resetJobContext` <a name="resetJobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resetJobContext"></a>

```typescript
public resetJobContext(): void
```

##### `resetNotebookId` <a name="resetNotebookId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.resetNotebookId"></a>

```typescript
public resetNotebookId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.jobContext">jobContext</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference">FeatureEngineeringFeatureLineageContextJobContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.jobContextInput">jobContextInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.notebookIdInput">notebookIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.notebookId">notebookId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobContext`<sup>Required</sup> <a name="jobContext" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.jobContext"></a>

```typescript
public readonly jobContext: FeatureEngineeringFeatureLineageContextJobContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContextOutputReference">FeatureEngineeringFeatureLineageContextJobContextOutputReference</a>

---

##### `jobContextInput`<sup>Optional</sup> <a name="jobContextInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.jobContextInput"></a>

```typescript
public readonly jobContextInput: IResolvable | FeatureEngineeringFeatureLineageContextJobContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextJobContext">FeatureEngineeringFeatureLineageContextJobContext</a>

---

##### `notebookIdInput`<sup>Optional</sup> <a name="notebookIdInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.notebookIdInput"></a>

```typescript
public readonly notebookIdInput: number;
```

- *Type:* number

---

##### `notebookId`<sup>Required</sup> <a name="notebookId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.notebookId"></a>

```typescript
public readonly notebookId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureLineageContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureLineageContext">FeatureEngineeringFeatureLineageContext</a>

---


### FeatureEngineeringFeatureProviderConfigOutputReference <a name="FeatureEngineeringFeatureProviderConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureProviderConfig">FeatureEngineeringFeatureProviderConfig</a>

---


### FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entityColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseriesColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityColumnsInput`<sup>Optional</sup> <a name="entityColumnsInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```typescript
public readonly entityColumnsInput: string[];
```

- *Type:* string[]

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `timeseriesColumnInput`<sup>Optional</sup> <a name="timeseriesColumnInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```typescript
public readonly timeseriesColumnInput: string;
```

- *Type:* string

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---


### FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList <a name="FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.get"></a>

```typescript
public get(index: number): FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]

---


### FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference <a name="FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPathInput">variantExprPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variantExprPathInput`<sup>Optional</sup> <a name="variantExprPathInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPathInput"></a>

```typescript
public readonly variantExprPathInput: string;
```

- *Type:* string

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>

---


### FeatureEngineeringFeatureSourceKafkaSourceOutputReference <a name="FeatureEngineeringFeatureSourceKafkaSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putEntityColumnIdentifiers">putEntityColumnIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier">putTimeseriesColumnIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityColumnIdentifiers` <a name="putEntityColumnIdentifiers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putEntityColumnIdentifiers"></a>

```typescript
public putEntityColumnIdentifiers(value: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putEntityColumnIdentifiers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]

---

##### `putTimeseriesColumnIdentifier` <a name="putTimeseriesColumnIdentifier" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier"></a>

```typescript
public putTimeseriesColumnIdentifier(value: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.putTimeseriesColumnIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiers">entityColumnIdentifiers</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifier">timeseriesColumnIdentifier</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiersInput">entityColumnIdentifiersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifierInput">timeseriesColumnIdentifierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityColumnIdentifiers`<sup>Required</sup> <a name="entityColumnIdentifiers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiers"></a>

```typescript
public readonly entityColumnIdentifiers: FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList</a>

---

##### `timeseriesColumnIdentifier`<sup>Required</sup> <a name="timeseriesColumnIdentifier" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifier"></a>

```typescript
public readonly timeseriesColumnIdentifier: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference</a>

---

##### `entityColumnIdentifiersInput`<sup>Optional</sup> <a name="entityColumnIdentifiersInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.entityColumnIdentifiersInput"></a>

```typescript
public readonly entityColumnIdentifiersInput: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers">FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeseriesColumnIdentifierInput`<sup>Optional</sup> <a name="timeseriesColumnIdentifierInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.timeseriesColumnIdentifierInput"></a>

```typescript
public readonly timeseriesColumnIdentifierInput: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceKafkaSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a>

---


### FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference <a name="FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPathInput">variantExprPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPath">variantExprPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variantExprPathInput`<sup>Optional</sup> <a name="variantExprPathInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPathInput"></a>

```typescript
public readonly variantExprPathInput: string;
```

- *Type:* string

---

##### `variantExprPath`<sup>Required</sup> <a name="variantExprPath" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.variantExprPath"></a>

```typescript
public readonly variantExprPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier">FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier</a>

---


### FeatureEngineeringFeatureSourceOutputReference <a name="FeatureEngineeringFeatureSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource">putDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putKafkaSource">putKafkaSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource">resetDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetKafkaSource">resetKafkaSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTableSource` <a name="putDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource"></a>

```typescript
public putDeltaTableSource(value: FeatureEngineeringFeatureSourceDeltaTableSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---

##### `putKafkaSource` <a name="putKafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putKafkaSource"></a>

```typescript
public putKafkaSource(value: FeatureEngineeringFeatureSourceKafkaSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putKafkaSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a>

---

##### `resetDeltaTableSource` <a name="resetDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource"></a>

```typescript
public resetDeltaTableSource(): void
```

##### `resetKafkaSource` <a name="resetKafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetKafkaSource"></a>

```typescript
public resetKafkaSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.kafkaSource">kafkaSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference">FeatureEngineeringFeatureSourceKafkaSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput">deltaTableSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.kafkaSourceInput">kafkaSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaTableSource`<sup>Required</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a>

---

##### `kafkaSource`<sup>Required</sup> <a name="kafkaSource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.kafkaSource"></a>

```typescript
public readonly kafkaSource: FeatureEngineeringFeatureSourceKafkaSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSourceOutputReference">FeatureEngineeringFeatureSourceKafkaSourceOutputReference</a>

---

##### `deltaTableSourceInput`<sup>Optional</sup> <a name="deltaTableSourceInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput"></a>

```typescript
public readonly deltaTableSourceInput: IResolvable | FeatureEngineeringFeatureSourceDeltaTableSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---

##### `kafkaSourceInput`<sup>Optional</sup> <a name="kafkaSourceInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.kafkaSourceInput"></a>

```typescript
public readonly kafkaSourceInput: IResolvable | FeatureEngineeringFeatureSourceKafkaSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceKafkaSource">FeatureEngineeringFeatureSourceKafkaSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---


### FeatureEngineeringFeatureTimeWindowContinuousOutputReference <a name="FeatureEngineeringFeatureTimeWindowContinuousOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureTimeWindowContinuous;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

---


### FeatureEngineeringFeatureTimeWindowOutputReference <a name="FeatureEngineeringFeatureTimeWindowOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putContinuous">putContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putSliding">putSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putTumbling">putTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetSliding">resetSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetTumbling">resetTumbling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContinuous` <a name="putContinuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putContinuous"></a>

```typescript
public putContinuous(value: FeatureEngineeringFeatureTimeWindowContinuous): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

---

##### `putSliding` <a name="putSliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putSliding"></a>

```typescript
public putSliding(value: FeatureEngineeringFeatureTimeWindowSliding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putSliding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

---

##### `putTumbling` <a name="putTumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putTumbling"></a>

```typescript
public putTumbling(value: FeatureEngineeringFeatureTimeWindowTumbling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putTumbling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

---

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetSliding` <a name="resetSliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetSliding"></a>

```typescript
public resetSliding(): void
```

##### `resetTumbling` <a name="resetTumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetTumbling"></a>

```typescript
public resetTumbling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuous">continuous</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference">FeatureEngineeringFeatureTimeWindowContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.sliding">sliding</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference">FeatureEngineeringFeatureTimeWindowSlidingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumbling">tumbling</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference">FeatureEngineeringFeatureTimeWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuousInput">continuousInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.slidingInput">slidingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumblingInput">tumblingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuous"></a>

```typescript
public readonly continuous: FeatureEngineeringFeatureTimeWindowContinuousOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference">FeatureEngineeringFeatureTimeWindowContinuousOutputReference</a>

---

##### `sliding`<sup>Required</sup> <a name="sliding" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.sliding"></a>

```typescript
public readonly sliding: FeatureEngineeringFeatureTimeWindowSlidingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference">FeatureEngineeringFeatureTimeWindowSlidingOutputReference</a>

---

##### `tumbling`<sup>Required</sup> <a name="tumbling" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumbling"></a>

```typescript
public readonly tumbling: FeatureEngineeringFeatureTimeWindowTumblingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference">FeatureEngineeringFeatureTimeWindowTumblingOutputReference</a>

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: IResolvable | FeatureEngineeringFeatureTimeWindowContinuous;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

---

##### `slidingInput`<sup>Optional</sup> <a name="slidingInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.slidingInput"></a>

```typescript
public readonly slidingInput: IResolvable | FeatureEngineeringFeatureTimeWindowSliding;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

---

##### `tumblingInput`<sup>Optional</sup> <a name="tumblingInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumblingInput"></a>

```typescript
public readonly tumblingInput: IResolvable | FeatureEngineeringFeatureTimeWindowTumbling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureTimeWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---


### FeatureEngineeringFeatureTimeWindowSlidingOutputReference <a name="FeatureEngineeringFeatureTimeWindowSlidingOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDurationInput">slideDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDuration">slideDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `slideDurationInput`<sup>Optional</sup> <a name="slideDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDurationInput"></a>

```typescript
public readonly slideDurationInput: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `slideDuration`<sup>Required</sup> <a name="slideDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDuration"></a>

```typescript
public readonly slideDuration: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureTimeWindowSliding;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

---


### FeatureEngineeringFeatureTimeWindowTumblingOutputReference <a name="FeatureEngineeringFeatureTimeWindowTumblingOutputReference" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer"></a>

```typescript
import { featureEngineeringFeature } from '@cdktn/provider-databricks'

new featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDuration">windowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureEngineeringFeatureTimeWindowTumbling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

---



