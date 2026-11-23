# `dataDatabricksLakewatchBuiltinParsers` Submodule <a name="`dataDatabricksLakewatchBuiltinParsers` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchBuiltinParsers <a name="DataDatabricksLakewatchBuiltinParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers databricks_lakewatch_builtin_parsers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers(scope: Construct, id: string, config?: DataDatabricksLakewatchBuiltinParsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig">DataDatabricksLakewatchBuiltinParsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig">DataDatabricksLakewatchBuiltinParsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksLakewatchBuiltinParsersProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParsers resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isConstruct"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformElement"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformDataSource"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParsers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksLakewatchBuiltinParsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksLakewatchBuiltinParsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchBuiltinParsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.builtinParsers">builtinParsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList">DataDatabricksLakewatchBuiltinParsersBuiltinParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `builtinParsers`<sup>Required</sup> <a name="builtinParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.builtinParsers"></a>

```typescript
public readonly builtinParsers: DataDatabricksLakewatchBuiltinParsersBuiltinParsersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList">DataDatabricksLakewatchBuiltinParsersBuiltinParsersList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksLakewatchBuiltinParsersProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchBuiltinParsersBuiltinParsers <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParsersBuiltinParsers: dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#name DataDatabricksLakewatchBuiltinParsers#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#provider_config DataDatabricksLakewatchBuiltinParsers#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#name DataDatabricksLakewatchBuiltinParsers#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#provider_config DataDatabricksLakewatchBuiltinParsers#provider_config}.

---

### DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig: dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#workspace_id DataDatabricksLakewatchBuiltinParsers#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#workspace_id DataDatabricksLakewatchBuiltinParsers#workspace_id}.

---

### DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParsersBuiltinParsersTags: dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#key DataDatabricksLakewatchBuiltinParsers#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#value DataDatabricksLakewatchBuiltinParsers#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#key DataDatabricksLakewatchBuiltinParsers#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#value DataDatabricksLakewatchBuiltinParsers#value}.

---

### DataDatabricksLakewatchBuiltinParsersConfig <a name="DataDatabricksLakewatchBuiltinParsersConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParsersConfig: dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#filter DataDatabricksLakewatchBuiltinParsers#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#page_size DataDatabricksLakewatchBuiltinParsers#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#provider_config DataDatabricksLakewatchBuiltinParsers#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#filter DataDatabricksLakewatchBuiltinParsers#filter}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#page_size DataDatabricksLakewatchBuiltinParsers#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchBuiltinParsersProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#provider_config DataDatabricksLakewatchBuiltinParsers#provider_config}.

---

### DataDatabricksLakewatchBuiltinParsersProviderConfig <a name="DataDatabricksLakewatchBuiltinParsersProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

const dataDatabricksLakewatchBuiltinParsersProviderConfig: dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#workspace_id DataDatabricksLakewatchBuiltinParsers#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#workspace_id DataDatabricksLakewatchBuiltinParsers#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchBuiltinParsersBuiltinParsersList <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.get"></a>

```typescript
public get(index: number): DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers">DataDatabricksLakewatchBuiltinParsersBuiltinParsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchBuiltinParsersBuiltinParsers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers">DataDatabricksLakewatchBuiltinParsersBuiltinParsers</a>[]

---


### DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.latestVersion">latestVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.parserId">parserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.parserName">parserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers">DataDatabricksLakewatchBuiltinParsersBuiltinParsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.latestVersion"></a>

```typescript
public readonly latestVersion: number;
```

- *Type:* number

---

##### `parserId`<sup>Required</sup> <a name="parserId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.parserId"></a>

```typescript
public readonly parserId: string;
```

- *Type:* string

---

##### `parserName`<sup>Required</sup> <a name="parserName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.parserName"></a>

```typescript
public readonly parserName: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.tags"></a>

```typescript
public readonly tags: DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchBuiltinParsersBuiltinParsers;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers">DataDatabricksLakewatchBuiltinParsersBuiltinParsers</a>

---


### DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a>

---


### DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags</a>[]

---


### DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags</a>

---


### DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksLakewatchBuiltinParsers } from '@cdktn/provider-databricks'

new dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksLakewatchBuiltinParsersProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a>

---



