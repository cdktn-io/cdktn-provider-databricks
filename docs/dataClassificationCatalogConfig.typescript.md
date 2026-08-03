# `dataClassificationCatalogConfig` Submodule <a name="`dataClassificationCatalogConfig` Submodule" id="@cdktn/provider-databricks.dataClassificationCatalogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataClassificationCatalogConfig <a name="DataClassificationCatalogConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config databricks_data_classification_catalog_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataClassificationCatalogConfig.DataClassificationCatalogConfig(scope: Construct, id: string, config: DataClassificationCatalogConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig">DataClassificationCatalogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig">DataClassificationCatalogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putAutoTagConfigs">putAutoTagConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putExcludedSchemas">putExcludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putIncludedSchemas">putIncludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetAutoTagConfigs">resetAutoTagConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetExcludedSchemas">resetExcludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetIncludedSchemas">resetIncludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoTagConfigs` <a name="putAutoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putAutoTagConfigs"></a>

```typescript
public putAutoTagConfigs(value: IResolvable | DataClassificationCatalogConfigAutoTagConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putAutoTagConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>[]

---

##### `putExcludedSchemas` <a name="putExcludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putExcludedSchemas"></a>

```typescript
public putExcludedSchemas(value: DataClassificationCatalogConfigExcludedSchemas): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putExcludedSchemas.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas">DataClassificationCatalogConfigExcludedSchemas</a>

---

##### `putIncludedSchemas` <a name="putIncludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putIncludedSchemas"></a>

```typescript
public putIncludedSchemas(value: DataClassificationCatalogConfigIncludedSchemas): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putIncludedSchemas.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataClassificationCatalogConfigProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

---

##### `resetAutoTagConfigs` <a name="resetAutoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetAutoTagConfigs"></a>

```typescript
public resetAutoTagConfigs(): void
```

##### `resetExcludedSchemas` <a name="resetExcludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetExcludedSchemas"></a>

```typescript
public resetExcludedSchemas(): void
```

##### `resetIncludedSchemas` <a name="resetIncludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetIncludedSchemas"></a>

```typescript
public resetIncludedSchemas(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataClassificationCatalogConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataClassificationCatalogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataClassificationCatalogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigs">autoTagConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList">DataClassificationCatalogConfigAutoTagConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.excludedSchemas">excludedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference">DataClassificationCatalogConfigExcludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemas">includedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference">DataClassificationCatalogConfigIncludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference">DataClassificationCatalogConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigsInput">autoTagConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.excludedSchemasInput">excludedSchemasInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas">DataClassificationCatalogConfigExcludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemasInput">includedSchemasInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoTagConfigs`<sup>Required</sup> <a name="autoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigs"></a>

```typescript
public readonly autoTagConfigs: DataClassificationCatalogConfigAutoTagConfigsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList">DataClassificationCatalogConfigAutoTagConfigsList</a>

---

##### `excludedSchemas`<sup>Required</sup> <a name="excludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.excludedSchemas"></a>

```typescript
public readonly excludedSchemas: DataClassificationCatalogConfigExcludedSchemasOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference">DataClassificationCatalogConfigExcludedSchemasOutputReference</a>

---

##### `includedSchemas`<sup>Required</sup> <a name="includedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemas"></a>

```typescript
public readonly includedSchemas: DataClassificationCatalogConfigIncludedSchemasOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference">DataClassificationCatalogConfigIncludedSchemasOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataClassificationCatalogConfigProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference">DataClassificationCatalogConfigProviderConfigOutputReference</a>

---

##### `autoTagConfigsInput`<sup>Optional</sup> <a name="autoTagConfigsInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigsInput"></a>

```typescript
public readonly autoTagConfigsInput: IResolvable | DataClassificationCatalogConfigAutoTagConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>[]

---

##### `excludedSchemasInput`<sup>Optional</sup> <a name="excludedSchemasInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.excludedSchemasInput"></a>

```typescript
public readonly excludedSchemasInput: IResolvable | DataClassificationCatalogConfigExcludedSchemas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas">DataClassificationCatalogConfigExcludedSchemas</a>

---

##### `includedSchemasInput`<sup>Optional</sup> <a name="includedSchemasInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemasInput"></a>

```typescript
public readonly includedSchemasInput: IResolvable | DataClassificationCatalogConfigIncludedSchemas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataClassificationCatalogConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataClassificationCatalogConfigAutoTagConfigs <a name="DataClassificationCatalogConfigAutoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataClassificationCatalogConfigAutoTagConfigs: dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode">autoTaggingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#auto_tagging_mode DataClassificationCatalogConfig#auto_tagging_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.classificationTag">classificationTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#classification_tag DataClassificationCatalogConfig#classification_tag}. |

---

##### `autoTaggingMode`<sup>Required</sup> <a name="autoTaggingMode" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode"></a>

```typescript
public readonly autoTaggingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#auto_tagging_mode DataClassificationCatalogConfig#auto_tagging_mode}.

---

##### `classificationTag`<sup>Required</sup> <a name="classificationTag" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.classificationTag"></a>

```typescript
public readonly classificationTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#classification_tag DataClassificationCatalogConfig#classification_tag}.

---

### DataClassificationCatalogConfigConfig <a name="DataClassificationCatalogConfigConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataClassificationCatalogConfigConfig: dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.autoTagConfigs">autoTagConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.excludedSchemas">excludedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas">DataClassificationCatalogConfigExcludedSchemas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#excluded_schemas DataClassificationCatalogConfig#excluded_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.includedSchemas">includedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}.

---

##### `autoTagConfigs`<sup>Optional</sup> <a name="autoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.autoTagConfigs"></a>

```typescript
public readonly autoTagConfigs: IResolvable | DataClassificationCatalogConfigAutoTagConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}.

---

##### `excludedSchemas`<sup>Optional</sup> <a name="excludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.excludedSchemas"></a>

```typescript
public readonly excludedSchemas: DataClassificationCatalogConfigExcludedSchemas;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas">DataClassificationCatalogConfigExcludedSchemas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#excluded_schemas DataClassificationCatalogConfig#excluded_schemas}.

---

##### `includedSchemas`<sup>Optional</sup> <a name="includedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.includedSchemas"></a>

```typescript
public readonly includedSchemas: DataClassificationCatalogConfigIncludedSchemas;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataClassificationCatalogConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}.

---

### DataClassificationCatalogConfigExcludedSchemas <a name="DataClassificationCatalogConfigExcludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataClassificationCatalogConfigExcludedSchemas: dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas.property.names">names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}. |

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}.

---

### DataClassificationCatalogConfigIncludedSchemas <a name="DataClassificationCatalogConfigIncludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataClassificationCatalogConfigIncludedSchemas: dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas.property.names">names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}. |

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}.

---

### DataClassificationCatalogConfigProviderConfig <a name="DataClassificationCatalogConfigProviderConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

const dataClassificationCatalogConfigProviderConfig: dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#workspace_id DataClassificationCatalogConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/data_classification_catalog_config#workspace_id DataClassificationCatalogConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataClassificationCatalogConfigAutoTagConfigsList <a name="DataClassificationCatalogConfigAutoTagConfigsList" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.get"></a>

```typescript
public get(index: number): DataClassificationCatalogConfigAutoTagConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataClassificationCatalogConfigAutoTagConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>[]

---


### DataClassificationCatalogConfigAutoTagConfigsOutputReference <a name="DataClassificationCatalogConfigAutoTagConfigsOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput">autoTaggingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput">classificationTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode">autoTaggingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag">classificationTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoTaggingModeInput`<sup>Optional</sup> <a name="autoTaggingModeInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput"></a>

```typescript
public readonly autoTaggingModeInput: string;
```

- *Type:* string

---

##### `classificationTagInput`<sup>Optional</sup> <a name="classificationTagInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput"></a>

```typescript
public readonly classificationTagInput: string;
```

- *Type:* string

---

##### `autoTaggingMode`<sup>Required</sup> <a name="autoTaggingMode" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode"></a>

```typescript
public readonly autoTaggingMode: string;
```

- *Type:* string

---

##### `classificationTag`<sup>Required</sup> <a name="classificationTag" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag"></a>

```typescript
public readonly classificationTag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataClassificationCatalogConfigAutoTagConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>

---


### DataClassificationCatalogConfigExcludedSchemasOutputReference <a name="DataClassificationCatalogConfigExcludedSchemasOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.namesInput">namesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas">DataClassificationCatalogConfigExcludedSchemas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.namesInput"></a>

```typescript
public readonly namesInput: string[];
```

- *Type:* string[]

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataClassificationCatalogConfigExcludedSchemas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigExcludedSchemas">DataClassificationCatalogConfigExcludedSchemas</a>

---


### DataClassificationCatalogConfigIncludedSchemasOutputReference <a name="DataClassificationCatalogConfigIncludedSchemasOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput">namesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput"></a>

```typescript
public readonly namesInput: string[];
```

- *Type:* string[]

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataClassificationCatalogConfigIncludedSchemas;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

---


### DataClassificationCatalogConfigProviderConfigOutputReference <a name="DataClassificationCatalogConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataClassificationCatalogConfig } from '@cdktn/provider-databricks'

new dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataClassificationCatalogConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

---



